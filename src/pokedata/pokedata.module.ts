import { Module } from '@nestjs/common';
import { PokedataService } from '../service/pokedata/pokedata.service';
import { PokedataController } from './pokedata.controller';

@Module({
  providers: [PokedataService],
  controllers: [PokedataController],
})
export class PokedataModule {}
