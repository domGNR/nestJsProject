import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { CreateProductDto } from "../common/dto/create-product.dto";
import { GetDto } from "../common/dto/get.dto";
import { LocalProductsService } from "./local-products.service";

@ApiTags("Local Products")
@Controller("local-products")
export class LocalProductsController {
    constructor(private readonly localProductsService: LocalProductsService) {}

    @Get("/proc/:id")
    async get(@Param("id") id: string): Promise<GetDto> {
        return await this.localProductsService.getById(id);
    }

    @Post()
    async post(@Body() product: CreateProductDto): Promise<GetDto> {
        return await this.localProductsService.add(product);
    }

    @Delete("/proc/:id")
    async delete(@Param("id") id: string): Promise<GetDto> {
        return await this.localProductsService.delete(id);
    }
}
