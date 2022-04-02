import { Module } from '@nestjs/common';
import { PokedataService } from '../service/pokedata/pokedata.service';
import { PokedataResolver } from './pokedata.resolver';
import { PokedataController } from './pokedata.controller';

@Module({
  providers: [PokedataService, PokedataResolver],
  controllers: [PokedataController],
})
export class PokedataModule {}
