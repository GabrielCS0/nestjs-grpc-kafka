import { Inject, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { CreateProductDTO } from '../../dtos/create-product.dto';
import { IProductsRepository } from '../../repositories/products.repository';

@Injectable()
export class CreateProductService {
  constructor(
    @Inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  execute({ name, price }: CreateProductDTO): Promise<Product> {
    const product = this.productsRepository.create({ name, price });
    return product;
  }
}
