import { Injectable, Post, HttpService } from '@nestjs/common';
import { Files } from './files';

@Injectable()
export class LetterService {
  public fileHtml: string;
  public api: any;
  getHello(): string {
    return 'Hello World!';
  }
  constructor(private httpService: HttpService) {
    this.api = 'https://siigogeneratepdf.azurewebsites.net/';
  }
  postForm(data): any {
    /* this.fileHtml = res.sendFile('carta.html', {
      root: 'dist',
    }); */
    // this.fileHtml = res.send(this.fileHtml.replace('@fullName', data.fullName));
    let files = new Files();

    this.fileHtml = files.html;
    this.fileHtml = this.fileHtml.replace('@fullName', data.fullName);
    this.fileHtml = this.fileHtml.replace(
      '@identification',
      data.identification,
    );
    this.fileHtml = this.fileHtml.replace('@company', data.company);
    this.fileHtml = this.fileHtml.replace(
      '@companyIdentification',
      data.companyIdentification,
    );
    this.fileHtml = this.fileHtml.replace('@city', data.city);

    this.fileHtml = this.fileHtml.replace('@email', data.email);
    this.fileHtml = this.fileHtml.replace('@contactPhone', data.contactPhone);
    this.fileHtml = this.fileHtml.replace('@contactPhone', data.contactPhone);
    this.fileHtml = this.fileHtml.replace(
      '@companyIdentification',
      data.companyIdentification,
    );

    let jsonResponse = {
      html: this.fileHtml,
      css: files.css,
      name: data.identification + '_carta.html',
    };
    this.sendHtml(jsonResponse); //De ultimo
    return jsonResponse;
    //carga del archivo html
  }
  // envia params
  sendHtml(jsonResponse) {
    return this.httpService.post(this.api, jsonResponse);
  }

  /*getHtml() {
    return { html: this.fileHtml, data: 'data.fullName' };
  } */
}
