import { Test, TestingModule } from '@nestjs/testing';
import { PokedataResolver } from './pokedata.resolver';

describe('PokedataResolver', () => {
  let resolver: PokedataResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokedataResolver],
    }).compile();

    resolver = module.get<PokedataResolver>(PokedataResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
