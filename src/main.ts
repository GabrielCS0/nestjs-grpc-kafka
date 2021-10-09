import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductNotFoundExceptionFilter } from './exception-filters/product-not-found.exception-filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ProductNotFoundExceptionFilter());

  await app.listen(3000);
}
bootstrap();
