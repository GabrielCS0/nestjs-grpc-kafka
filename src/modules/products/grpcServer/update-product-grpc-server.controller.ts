/* eslint-disable @typescript-eslint/no-unused-vars */
import { Controller } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { Product } from '@prisma/client';
import { Metadata, ServerUnaryCall, status } from 'grpc';
import { UpdateProductDTO } from '../dtos/update-product.dto';
import { ProductNotFoundError } from '../errors/product-not-found.error';
import { UpdateProductService } from '../useCases/updateProduct/update-product.service';

@Controller()
export class UpdateProductGrpcServerController {
  constructor(private updateProductService: UpdateProductService) {}

  @GrpcMethod('ProductService')
  async update(
    data: UpdateProductDTO,
    metadata: Metadata,
    call: ServerUnaryCall<UpdateProductDTO>,
  ): Promise<Product> {
    try {
      const updatedProduct = await this.updateProductService.execute(data);
      return updatedProduct;
    } catch (error) {
      if (error instanceof ProductNotFoundError) {
        throw new RpcException({
          message: 'Product not found.',
          code: status.NOT_FOUND,
        });
      }
    }
  }
}
