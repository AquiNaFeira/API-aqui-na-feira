import { Test, TestingModule } from '@nestjs/testing';
import { FeiranteController } from './feirante.controller';

describe('FeiranteController', () => {
  let controller: FeiranteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeiranteController],
    }).compile();

    controller = module.get<FeiranteController>(FeiranteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
