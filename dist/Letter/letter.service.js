"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const files_1 = require("./files");
let LetterService = class LetterService {
    constructor(httpService) {
        this.httpService = httpService;
        this.api = 'https://siigogeneratepdf.azurewebsites.net/';
    }
    getHello() {
        return 'Hello World!';
    }
    postForm(data) {
        let files = new files_1.Files();
        this.fileHtml = files.html;
        this.fileHtml = this.fileHtml.replace('@fullName', data.fullName);
        this.fileHtml = this.fileHtml.replace('@identification', data.identification);
        this.fileHtml = this.fileHtml.replace('@company', data.company);
        this.fileHtml = this.fileHtml.replace('@companyIdentification', data.companyIdentification);
        this.fileHtml = this.fileHtml.replace('@city', data.city);
        this.fileHtml = this.fileHtml.replace('@email', data.email);
        this.fileHtml = this.fileHtml.replace('@contactPhone', data.contactPhone);
        this.fileHtml = this.fileHtml.replace('@contactPhone', data.contactPhone);
        this.fileHtml = this.fileHtml.replace('@companyIdentification', data.companyIdentification);
        let jsonResponse = {
            html: this.fileHtml,
            css: files.css,
            name: data.identification + '_carta.html',
        };
        this.sendHtml(jsonResponse);
        return jsonResponse;
    }
    sendHtml(jsonResponse) {
        return this.httpService.post(this.api, jsonResponse);
    }
};
LetterService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], LetterService);
exports.LetterService = LetterService;
//# sourceMappingURL=letter.service.js.map