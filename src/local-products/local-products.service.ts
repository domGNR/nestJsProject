import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../common/dto/create-product.dto";
import { GetProductDto } from "../common/dto/get-product.dto";
import { GetDto, Status } from "../common/dto/get.dto";
import { LocalProductsRepository } from "./local-products.repository";

@Injectable()
export class LocalProductsService {
    constructor(
        private readonly localProductsRepository: LocalProductsRepository
    ) {}

    async add(product: CreateProductDto): Promise<GetDto> {
        const result = await this.localProductsRepository.add(product);
        const response = new GetDto();
        if (result) {
            response.status = Status.OK;
        }
        return response;
    }

    async getById(id: string): Promise<GetProductDto> {
        const product = await this.localProductsRepository.getById(id);
        const result = new GetProductDto();
        if (product) {
            result.status = Status.OK;
            result.data = product;
        }
        return result;
    }

    async delete(id: string): Promise<GetDto> {
        const result = await this.localProductsRepository.delete(id);
        const response = new GetDto();
        if (result) {
            response.status = Status.OK;
        }
        return response;
    }
}
