import { Module } from '@nestjs/common';
import { ProductsRepository } from './repositories/implementations/products.repository';
import { CreateProductController } from './useCases/createProduct/create.product.controller';
import { CreateProductService } from './useCases/createProduct/create.product.service';

@Module({
  controllers: [CreateProductController],
  providers: [
    CreateProductService,
    {
      provide: 'ProductsRepository',
      inject: [ProductsRepository],
      useClass: ProductsRepository,
    },
  ],
})
export class ProductsModule {}
