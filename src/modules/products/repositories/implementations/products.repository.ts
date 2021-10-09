import { Product } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDTO } from '../../dtos/create-product.dto';
import { UpdateProductDTO } from '../../dtos/update-product.dto';
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

  async findById(id: string): Promise<Product> {
    const product = await this.prisma.product.findFirst({
      where: { id },
    });

    return product;
  }

  async updateById(id: string, data: UpdateProductDTO): Promise<Product> {
    const product = await this.prisma.product.update({
      where: { id },
      data,
    });

    return product;
  }

  async deleteById(id: string): Promise<void> {
    await this.prisma.product.delete({
      where: { id },
    });
  }
}
