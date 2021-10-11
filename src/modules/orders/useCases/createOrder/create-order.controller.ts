import { Controller, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { KafkaCreateOrderDTO } from '../../dtos/create-order.dto';
import { CreateOrderService } from './create-order.service';

@Controller()
export class CreateOrderController {
  constructor(private createOrderService: CreateOrderService) {}

  @MessagePattern('createOrder')
  handle(@Payload(new ValidationPipe()) { value }: KafkaCreateOrderDTO) {
    console.log(value);
    return this.createOrderService.execute(value);
  }
}
