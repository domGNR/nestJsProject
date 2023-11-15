import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductDto } from "../common/dto/create-product.dto";
import { Product } from "../common/entities/product.model";

@Injectable()
export class LocalProductsRepository {
    constructor(
        @InjectModel(Product.name) private LocalProduct: Model<Product>
    ) {}

    async getById(id: string): Promise<any> {
        return this.LocalProduct.findById(id);
    }

    async add(product: CreateProductDto): Promise<any> {
        return this.LocalProduct.create(product);
    }

    async delete(id: string): Promise<any> {
        return this.LocalProduct.findByIdAndDelete(id);
    }
}
