import { Controller, Get } from '@nestjs/common';
import { Product } from '@prisma/client';
import { FindAllProductsService } from './find-all-products.service';

@Controller('products')
export class FindAllProductsController {
  constructor(private findAllProductsService: FindAllProductsService) {}

  @Get()
  async handle(): Promise<Product[]> {
    const products = await this.findAllProductsService.execute();
    return products;
  }
}
