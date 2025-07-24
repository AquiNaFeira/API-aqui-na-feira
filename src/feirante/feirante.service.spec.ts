import { Test, TestingModule } from '@nestjs/testing';
import { FeiranteService } from './feirante.service';

describe('FeiranteService', () => {
  let service: FeiranteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeiranteService],
    }).compile();

    service = module.get<FeiranteService>(FeiranteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
