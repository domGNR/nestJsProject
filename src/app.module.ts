import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LocalProductsModule } from "./local-products/local-products.module";
import { ProductsModule } from "./products/products.module";

@Module({
    imports: [
        ProductsModule,
        LocalProductsModule,
        MongooseModule.forRoot("mongodb://localhost:27018/final-ex")
    ],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
