import { Test, TestingModule } from '@nestjs/testing';
import { LocalProductsController } from './local-products.controller';

describe('LocalProductsController', () => {
  let controller: LocalProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LocalProductsController],
    }).compile();

    controller = module.get<LocalProductsController>(LocalProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
