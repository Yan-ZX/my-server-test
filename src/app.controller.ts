import { Controller, Get, Header, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiQuery, ApiTags } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Header('Cache-Control', 'none')
  @ApiTags('hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('save')
  @ApiQuery({ name: 'id', required: false, description: '查询时带上id查询' })
  save(@Query() { id }): string {
    return this.appService.save(id);
  }
  @Post()
  test(@Body() { message }): string {
    return `${message}`;
  }
}
