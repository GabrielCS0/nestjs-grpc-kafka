import { Controller, Get, Param } from '@nestjs/common';
import { Product } from '@prisma/client';
import { FindProductByIdService } from './find-product-by-id.service';

@Controller('products')
export class FindProductByIdController {
  constructor(private findProductByIdService: FindProductByIdService) {}

  @Get(':id')
  async handle(@Param('id') id: string): Promise<Product> {
    const product = await this.findProductByIdService.execute(id);
    return product;
  }
}
