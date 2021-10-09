import { Inject, Injectable } from '@nestjs/common';
import { ProductNotFoundError } from '../../errors/product-not-found.error';
import { IProductsRepository } from '../../repositories/products.repository';

@Injectable()
export class RemoveProductService {
  constructor(
    @Inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const productExists = await this.productsRepository.findById(id);

    if (!productExists) throw new ProductNotFoundError();

    await this.productsRepository.deleteById(id);
  }
}
