import { Injectable } from "@nestjs/common";
import Decimal from "decimal.js";
import { GetImagesDto } from "../common/dto/get-images.dto";
import { GetProductDto } from "../common/dto/get-product.dto";
import { GetStockDto, StockDto } from "../common/dto/get-stock.dto";
import { Status } from "../common/dto/get.dto";
import { Product } from "../common/entities/product.model";
import { ExternalDataServiceProvider } from "./products-external.service.provider";

@Injectable()
export class ProductsService {
    constructor(
        private readonly externalDataService: ExternalDataServiceProvider
    ) {}

    async getById(id: string, url: string): Promise<GetProductDto> {
        const result: Product = await this.externalDataService.fetchData(url);
        const response = new GetProductDto();
        response.data = result;
        response.status = Status.OK;
        return response;
    }

    async getProductStock(id: string, url: string): Promise<GetStockDto> {
        const result: Product = await this.externalDataService.fetchData(url);
        const response = new GetStockDto();

        const { id: responseId, price, stock, discountPercentage } = result;
        const stockDto = new StockDto();
        stockDto.id = Number(responseId);
        stockDto.price = Number(price);
        const fullPrice = new Decimal(price);
        const discountAmount = new Decimal(discountPercentage)
            .div(100)
            .times(fullPrice);
        const priceSell = fullPrice.minus(discountAmount);
        stockDto.priceSell = Number(priceSell);
        stockDto.totalStockValue = Number(fullPrice.times(stock));
        stockDto.totalStockValueSell = Number(priceSell.times(stock));
        response.data = stockDto;
        response.status = Status.OK;
        return response;
    }

    async getImages(id: string, url: string) {
        const result: Product = await this.externalDataService.fetchData(url);
        const { images } = result;
        const imagesPromise: Promise<ArrayBuffer>[] = images.map((el) =>
            this.externalDataService.fetchData(el, {
                responseType: "arraybuffer"
            })
        );
        const promisesResults = await Promise.allSettled(imagesPromise);
        const fulfilledArray = promisesResults.filter(
            (el) => el.status === "fulfilled"
        );
        const response = new GetImagesDto();
        if (fulfilledArray.length > 0) {
            const base64Array = fulfilledArray.map((el) =>
                el.status === "fulfilled"
                    ? this.convertImageToBase64(el.value)
                    : ""
            );
            response.images = base64Array;
        } else {
            response.images = [];
        }
        response.status = Status.OK;
        return response;
    }

    private convertImageToBase64(string: ArrayBuffer): string {
        const buffer = Buffer.from(string);

        const base64Data = buffer.toString("base64");

        return base64Data;
    }
}
