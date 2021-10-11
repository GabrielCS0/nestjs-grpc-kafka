import { Module } from '@nestjs/common';
import { ClientKafka, ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaProducerController } from './kafka-producer/kafka-producer.controller';
import { CreateOrderController } from './useCases/createOrder/create-order.controller';
import { CreateOrderService } from './useCases/createOrder/create-order.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'KafkaService',
        transport: Transport.KAFKA,
        options: {
          client: {
            brokers: ['host.docker.internal:9094'],
          },
          consumer: {
            groupId: 'nest-group-' + Math.random(),
          },
        },
      },
    ]),
  ],
  controllers: [CreateOrderController, KafkaProducerController],
  providers: [
    CreateOrderService,
    {
      provide: 'KafkaProducer',
      useFactory: async (kafkaClient: ClientKafka) => {
        return kafkaClient.connect();
      },
      inject: ['KafkaService'],
    },
  ],
})
export class OrdersModule {}
