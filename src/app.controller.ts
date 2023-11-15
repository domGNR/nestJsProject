import { Controller } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    /* @Get()
    async getHello(): Promise<string> {
        const result = await this.appService.getHello();
        const result2 = await this.appService.getHello();
        return result + result2;
    } */
}
