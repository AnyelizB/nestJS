import { HttpService } from '@nestjs/common';
export declare class LetterService {
    private httpService;
    fileHtml: string;
    api: any;
    getHello(): string;
    constructor(httpService: HttpService);
    postForm(data: any): any;
    sendHtml(jsonResponse: any): import("rxjs").Observable<import("axios").AxiosResponse<any>>;
}
