import { Controller, Get, Param } from '@nestjs/common';
import { PokedataService } from '../service/pokedata/pokedata.service';
@Controller('pokedata')
export class PokedataController {
  constructor(private pokeDataService: PokedataService) {}
  @Get('pokemon/:name')
  public getPokemonName(@Param('name') name) {
    return this.pokeDataService.getPokemonName(name);
  }
  @Get('pokemon')
  getAllPokemon() {
    return this.pokeDataService
      .getAllPokemon()
      .then(function (res) {
        return res.map((pokemon) => pokemon);
      })
      .catch(function (error) {
        throw error;
      });
  }
}
