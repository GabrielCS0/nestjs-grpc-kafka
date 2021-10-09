import { Controller, Delete, HttpCode, Param } from '@nestjs/common';
import { RemoveProductService } from './remove-product.service';

@Controller('products')
export class RemoveProductController {
  constructor(private removeProductService: RemoveProductService) {}

  @HttpCode(204)
  @Delete(':id')
  async handle(@Param('id') id: string): Promise<void> {
    return this.removeProductService.execute(id);
  }
}
