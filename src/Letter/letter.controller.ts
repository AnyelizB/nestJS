import { LetterService } from './letter.service';
import { Controller, Get, Post, Body, Res, Header } from '@nestjs/common';
import { Response } from 'express';

@Controller('letters')
export class LetterController {
  constructor(private readonly letterService: LetterService) {}

  @Get()
  getHello(): string {
    return this.letterService.getHello();
  }

  @Post('postForm')
  @Header('Content-Type', 'application/json')
  postForm(@Body() data): any {
    return this.letterService.postForm(data);
  }

  /*@Get('getHtml')
  getHtml() {
    return this.letterService.getHtml();
  } */
}
