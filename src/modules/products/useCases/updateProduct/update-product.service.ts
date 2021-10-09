import { Inject, Injectable } from '@nestjs/common';
import { Product } from '@prisma/client';
import { UpdateProductDTO } from '../../dtos/update-product.dto';
import { ProductNotFoundError } from '../../errors/product-not-found.error';
import { IProductsRepository } from '../../repositories/products.repository';

@Injectable()
export class UpdateProductService {
  constructor(
    @Inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string, data: UpdateProductDTO): Promise<Product> {
    const productExists = await this.productsRepository.findById(id);

    if (!productExists) throw new ProductNotFoundError();

    const updatedProduct = this.productsRepository.updateById(id, data);

    return updatedProduct;
  }
}
