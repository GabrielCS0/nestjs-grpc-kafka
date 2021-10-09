import { Body, Controller, Param, Put } from '@nestjs/common';
import { Product } from '@prisma/client';
import { UpdateProductDTO } from '../../dtos/update-product.dto';
import { UpdateProductService } from './update-product.service';

@Controller('products')
export class UpdateProductController {
  constructor(private updateProductService: UpdateProductService) {}

  @Put(':id')
  async handle(
    @Param('id') id: string,
    @Body() data: UpdateProductDTO,
  ): Promise<Product> {
    const updatedProduct = await this.updateProductService.execute(id, data);
    return updatedProduct;
  }
}
