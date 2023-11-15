import { ApiProperty } from "@nestjs/swagger";
import { GetDto } from "./get.dto";

export class StockDto {
    @ApiProperty()
    id: number;
    @ApiProperty()
    price: number;
    @ApiProperty()
    priceSell: number;
    @ApiProperty()
    totalStockValue: number;
    @ApiProperty()
    totalStockValueSell: number;
}

export class GetStockDto extends GetDto {
    @ApiProperty()
    data!: StockDto;
}
