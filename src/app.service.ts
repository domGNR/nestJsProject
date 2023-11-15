import { Injectable } from "@nestjs/common";

@Injectable()
export class AppService {
    getHello(): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            setTimeout(() => {
                resolve("Hello World");
            }, 500);
        });
    }
}
