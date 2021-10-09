import { Inject, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { IProductsRepository } from '../../repositories/products.repository';

@Injectable()
export class FindProductByIdService {
  constructor(
    @Inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  execute(id: string): Promise<Product> {
    const product = this.productsRepository.findById(id);
    return product;
  }
}
