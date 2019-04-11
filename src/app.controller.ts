import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  getHello(@Param() params): string {
    console.log(params.name);
    return this.appService.getHello();
  }
}
