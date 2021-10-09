import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { Response } from 'express';
import { ProductNotFoundError } from 'src/modules/products/errors/product-not-found.error';

@Catch(ProductNotFoundError)
export class ProductNotFoundExceptionFilter implements ExceptionFilter {
  catch(exception: ProductNotFoundError, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    return response.status(404).json({
      error: {
        error: 'Not Found',
        message: exception.message,
      },
    });
  }
}
