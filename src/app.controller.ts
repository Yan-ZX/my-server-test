import { Controller, Get, Header, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Cache-Control', 'none')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('save')
  save(@Query() { id }): string {
    return this.appService.save(id);
  }
  @Post()
  test(@Body() { message }): string {
    return `${message}`;
  }
}
