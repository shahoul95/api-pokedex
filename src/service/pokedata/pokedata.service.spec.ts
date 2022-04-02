import { Test, TestingModule } from '@nestjs/testing';
import { PokedataService } from '../pokedata/pokedata.service';

describe('PokedataService', () => {
  let service: PokedataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokedataService],
    }).compile();

    service = module.get<PokedataService>(PokedataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
