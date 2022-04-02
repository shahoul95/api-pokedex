import { Controller, Get, Param } from '@nestjs/common';
import { PokedataService } from '../service/pokedata/pokedata.service';
@Controller('pokedata')
export class PokedataController {
  constructor(private pokeDataService: PokedataService) {}
  @Get('pokemon/:name')
  getPokemonName(@Param('name') name) {
    return this.pokeDataService.getPokemonName(name);
  }

  @Get('pokemon/:url')
  getPokemonUrl(@Param('url') url) {
    return this.pokeDataService.getPokemonUrl(url);
  }

  @Get('pokemon')
  getAllPokemon() {
    return this.pokeDataService.getAllPokemon();
  }
}
