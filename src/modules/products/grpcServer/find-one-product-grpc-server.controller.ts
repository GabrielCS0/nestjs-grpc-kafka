import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Product } from '@prisma/client';
import { FindProductByIdService } from '../useCases/findProductById/find-product-by-id.service';

@Controller()
export class FindOneProductGrpcServerController {
  constructor(private findProductByIdService: FindProductByIdService) {}

  @GrpcMethod('ProductService')
  async findOne(data: { id: string }): Promise<Product> {
    const { id } = data;
    const product = await this.findProductByIdService.execute(id);

    return product;
  }
}
