import { Test, TestingModule } from '@nestjs/testing';
import { LocalProductsService } from './local-products.service';

describe('LocalProductsService', () => {
  let service: LocalProductsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocalProductsService],
    }).compile();

    service = module.get<LocalProductsService>(LocalProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
