import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApiController } from './api.controller';
import { AuthenticationMiddleware } from 'src/common/middlewares/auth.middleware';

@Module({
  imports: [],
  controllers: [ApiController],
})
export class ApiModule implements NestModule {
  configure(consumer: MiddlewareConsumer): MiddlewareConsumer | void {
    // Use authentication midddleware
    consumer.apply(AuthenticationMiddleware).forRoutes('api');
  }
}
