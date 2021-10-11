import { Module } from '@nestjs/common';
import { OrdersModule } from './modules/orders/orders.module';
import { ProductsModule } from './modules/products/products.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, ProductsModule, OrdersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
