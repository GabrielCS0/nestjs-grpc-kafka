import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';
import { ProductNotFoundExceptionFilter } from './exception-filters/product-not-found.exception-filters';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new ProductNotFoundExceptionFilter());

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:50051',
      package: 'product',
      protoPath: join(__dirname, 'modules/products/proto/product.proto'),
    },
  });

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: ['host.docker.internal:9094'],
      },
      consumer: {
        groupId: 'nest-group-' + Math.random(),
      },
    },
  });

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
