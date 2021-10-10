import { Controller } from '@nestjs/common';
import { GrpcMethod, RpcException } from '@nestjs/microservices';
import { ProductNotFoundError } from '../errors/product-not-found.error';
import { RemoveProductService } from '../useCases/removeProduct/remove-product.service';
import { status } from 'grpc';

@Controller()
export class RemoveProductGrpcServerController {
  constructor(private removeProductService: RemoveProductService) {}

  @GrpcMethod('ProductService', 'Delete')
  async remove(data: { id: string }): Promise<void> {
    try {
      const { id } = data;
      return await this.removeProductService.execute(id);
    } catch (error) {
      if (error instanceof ProductNotFoundError) {
        throw new RpcException({
          message: 'Product Not Found.',
          code: status.NOT_FOUND,
        });
      }
    }
  }
}
