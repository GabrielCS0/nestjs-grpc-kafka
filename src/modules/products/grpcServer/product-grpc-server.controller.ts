/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Product } from '@prisma/client';
import { Metadata, ServerUnaryCall, status } from 'grpc';
import { CreateProductDTO } from '../dtos/create-product.dto';
import { CreateProductService } from '../useCases/createProduct/create-product.service';

@Controller()
export class ProductGrpcServerController {
  constructor(private createProductService: CreateProductService) {}

  @GrpcMethod('ProductService')
  async create(
    data: CreateProductDTO,
    metadata: Metadata,
    call: ServerUnaryCall<CreateProductDTO>,
  ): Promise<Product> {
    const product = await this.createProductService.execute(data);
    return product;
  }
}
