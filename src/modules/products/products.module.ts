import { Module } from '@nestjs/common';

import { ProductsRepository } from './repositories/implementations/products.repository';
import { CreateProductController } from './useCases/createProduct/create-product.controller';
import { CreateProductService } from './useCases/createProduct/create-product.service';

import { FindAllProductsController } from './useCases/findAllProducts/find-all-products.controller';
import { FindAllProductsService } from './useCases/findAllProducts/find-all-products.service';

import { FindProductByIdController } from './useCases/findProductById/find-product-by-id.controller';
import { FindProductByIdService } from './useCases/findProductById/find-product-by-id.service';

import { UpdateProductController } from './useCases/updateProduct/update-product.controller';
import { UpdateProductService } from './useCases/updateProduct/update-product.service';

@Module({
  controllers: [
    CreateProductController,
    FindAllProductsController,
    FindProductByIdController,
    UpdateProductController,
  ],
  providers: [
    CreateProductService,
    FindAllProductsService,
    FindProductByIdService,
    UpdateProductService,
    {
      provide: 'ProductsRepository',
      inject: [ProductsRepository],
      useClass: ProductsRepository,
    },
  ],
})
export class ProductsModule {}