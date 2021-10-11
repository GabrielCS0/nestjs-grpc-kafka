import { Injectable } from '@nestjs/common';
import { CreateOrderDTO } from '../../dtos/create-order.dto';

@Injectable()
export class CreateOrderService {
  execute(data: CreateOrderDTO) {
    // Create your order...
    return `Create product ${data}`;
  }
}
