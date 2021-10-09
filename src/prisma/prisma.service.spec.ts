import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from './prisma.service';

describe('Prisma Service', () => {
  let service: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService],
    }).compile();

    service = module.get<PrismaService>(PrismaService);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });
});
