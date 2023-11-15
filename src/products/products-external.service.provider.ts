import { HttpService } from "@nestjs/axios";
import { Injectable, InternalServerErrorException } from "@nestjs/common";
import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { catchError, firstValueFrom, map } from "rxjs";

@Injectable()
export class ExternalDataServiceProvider {
    constructor(private readonly httpService: HttpService) {}

    async fetchData<T>(url: string, options?: AxiosRequestConfig): Promise<T> {
        const data = await firstValueFrom<T>(
            this.httpService.get(url, options).pipe(
                map((x: AxiosResponse) => x.data),
                catchError((error: AxiosError) => {
                    throw new InternalServerErrorException(
                        `Error calling remote URI ${url} - ${error.message}`
                    );
                })
            )
        );
        return data;
    }
}
