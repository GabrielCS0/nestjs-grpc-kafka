import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDTO } from '../../dtos/create.product.dto';
import { IProductsRepository } from '../products.repository';

export class ProductsRepository implements IProductsRepository {
  private prisma: PrismaService;

  constructor() {
    this.prisma = new PrismaService();
  }

  async create(data: CreateProductDTO): Promise<Product> {
    const product = await this.prisma.product.create({ data });
    return product;
  }

  async findAll(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();
    return products;
  }
}
