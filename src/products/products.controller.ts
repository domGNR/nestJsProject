import { Controller, Get, Param } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProductsService } from "./products.service";

@ApiTags("Products")
@Controller("products")
export class ProductsController {
    constructor(private readonly productsService: ProductsService) {}

    @Get("/proc/:id")
    async get(@Param("id") id: string) {
        const url = `https://dummyjson.com/products/${id}`;
        return await this.productsService.getProductStock(id, url);
    }

    @Get("/raw/:id")
    async getRaw(@Param("id") id: string) {
        const url = `https://dummyjson.com/products/${id}`;
        return await this.productsService.getById(id, url);
    }

    @Get("/download/:id")
    async getImage(@Param("id") id: string) {
        const url = `https://dummyjson.com/products/${id}`;
        return await this.productsService.getImages(id, url);
    }
}
