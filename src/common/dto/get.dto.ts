import { ApiProperty } from "@nestjs/swagger";

export class GetDto {
    @ApiProperty()
    status: Status;
    @ApiProperty()
    message!: string;
}

export enum Status {
    OK = "OK",
    ERROR = "ERROR",
    FAIL = "FAIL"
}
