import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { JwtGuard } from './common/auth';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // Use jwt strategy
  @UseGuards(JwtGuard)
  @Get('/external')
  getProtected() {
    return `external using guards`;
  }
}
