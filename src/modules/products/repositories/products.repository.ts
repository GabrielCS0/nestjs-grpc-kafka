import { Product } from '@prisma/client';
import { CreateProductDTO } from '../dtos/create.product.dto';

export interface IProductsRepository {
  create(data: CreateProductDTO): Promise<Product>;
}
