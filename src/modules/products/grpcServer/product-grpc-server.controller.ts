import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Product } from '@prisma/client';
import { Metadata, ServerUnaryCall } from 'grpc';
import { CreateProductDTO } from '../dtos/create-product.dto';
import { CreateProductService } from '../useCases/createProduct/create-product.service';

@Controller()
export class ProductGrpcServerController {
  constructor(private createProductService: CreateProductService) {}

  @GrpcMethod('ProductService', 'Create')
  create(
    data: CreateProductDTO,
    metadata: Metadata,
    call: ServerUnaryCall<CreateProductDTO>,
  ): Promise<Product> {
    const product = this.createProductService.execute(data);
    return product;
  }
}
