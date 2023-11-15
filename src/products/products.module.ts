import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { ExternalDataServiceProvider } from "./products-external.service.provider";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    imports: [HttpModule],
    controllers: [ProductsController],
    providers: [ProductsService, ExternalDataServiceProvider]
})
export class ProductsModule {}
