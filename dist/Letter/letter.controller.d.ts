import { LetterService } from './letter.service';
export declare class LetterController {
    private readonly letterService;
    constructor(letterService: LetterService);
    getHello(): string;
    postForm(data: any): any;
}
