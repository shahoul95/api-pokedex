import { Controller, Get, Param } from '@nestjs/common';
import { PokedataService } from '../service/pokedata/pokedata.service';
@Controller('pokedata')
export class PokedataController {
  constructor(private pokeDataService: PokedataService) {}
  @Get('pokemon/:name')
  getPokemon(@Param('name') name) {
    return this.pokeDataService.getPokemonName(name);
  }
}
