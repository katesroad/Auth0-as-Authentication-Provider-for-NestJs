import { Controller, Get } from '@nestjs/common';

@Controller('api')
export class ApiController {
  @Get()
  getApiPath() {
    return 'api path';
  }
}
