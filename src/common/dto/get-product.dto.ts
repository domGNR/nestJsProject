import { ApiProperty } from "@nestjs/swagger";
import { Product } from "../entities/product.model";
import { GetDto } from "./get.dto";

export class GetProductDto extends GetDto {
    @ApiProperty()
    data!: Product;
}
