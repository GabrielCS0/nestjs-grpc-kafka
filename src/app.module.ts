import { Module } from '@nestjs/common';
import { ProductsModule } from './modules/products/products.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, ProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
