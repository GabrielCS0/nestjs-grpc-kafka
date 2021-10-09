import { Inject, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { IProductsRepository } from '../../repositories/products.repository';

@Injectable()
export class FindAllProductsService {
  constructor(
    @Inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  execute(): Promise<Product[]> {
    const products = this.productsRepository.findAll();
    return products;
  }
}
