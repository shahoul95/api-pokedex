import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PokemonService } from '../../service/pokemon.service/pokemon.service';
@Controller('pokemon.service')
export class PokemonController {
  constructor(private pokeDataService: PokemonService) {}
  @Get('pokemon/:offset/:limit')
  getPokemon(
    @Param('offset', ParseIntPipe) offset: number,
    @Param('limit', ParseIntPipe) limit: number,
  ) {
    return this.pokeDataService.getMorePokemon(offset, limit);
  }
}
