import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateProductDTO } from '../../dtos/create-product.dto';
import { CreateProductService } from './create-product.service';

@Controller('products')
export class CreateProductController {
  constructor(private createProductService: CreateProductService) {}

  @Post()
  async handle(
    @Body(new ValidationPipe({ errorHttpStatusCode: 422 }))
    { name, price }: CreateProductDTO,
  ) {
    const product = await this.createProductService.execute({ name, price });
    return product;
  }
}
