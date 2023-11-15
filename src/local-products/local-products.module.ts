import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "../common/entities/product.model";
import { ProductsService } from "../products/products.service";
import { LocalProductsController } from "./local-products.controller";
import { LocalProductsRepository } from "./local-products.repository";
import { LocalProductsService } from "./local-products.service";

const productAliasProvider = {
    provide: "aliasedProductService",
    useExisting: ProductsService
};

@Module({
    imports: [
        MongooseModule.forFeature([{ name: "Product", schema: ProductSchema }])
    ],
    controllers: [LocalProductsController],
    providers: [LocalProductsService, LocalProductsRepository]
})
export class LocalProductsModule {}
