import { Test, TestingModule } from '@nestjs/testing';
import { PokedataController } from './pokedata.controller';

describe('PokedataController', () => {
  let controller: PokedataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PokedataController],
    }).compile();

    controller = module.get<PokedataController>(PokedataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
