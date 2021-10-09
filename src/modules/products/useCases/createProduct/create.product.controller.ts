import { Body, Controller, Post } from '@nestjs/common';
import { CreateProductDTO } from '../../dtos/create.product.dto';
import { CreateProductService } from './create.product.service';

@Controller('products')
export class CreateProductController {
  constructor(private createProductService: CreateProductService) {}

  @Post()
  async handle(@Body() { name, price }: CreateProductDTO) {
    const product = await this.createProductService.execute({ name, price });
    return product;
  }
}
