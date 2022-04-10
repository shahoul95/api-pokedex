import { Module } from '@nestjs/common';
import { PokemonService } from '../../service/pokemon.service/pokemon.service';
import { PokemonController } from './pokemon.controller';

@Module({
  providers: [PokemonService],
  controllers: [PokemonController],
})
export class PokemonModule {}
