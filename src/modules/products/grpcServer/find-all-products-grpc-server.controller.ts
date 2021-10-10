import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { FindAllProductsService } from '../useCases/findAllProducts/find-all-products.service';

@Controller()
export class FindAllProductsGrpcServerController {
  constructor(private findAllProductsService: FindAllProductsService) {}

  @GrpcMethod('ProductService')
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async findAll(data: any) {
    const products = await this.findAllProductsService.execute();
    return { data: products };
  }
}
