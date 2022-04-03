import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { PokedataService } from '../service/pokedata/pokedata.service';
@Controller('pokedata')
export class PokedataController {
  constructor(private pokeDataService: PokedataService) {}
  @Get('pokemon/:offset/:limit')
  getPokemon(
    @Param('offset', ParseIntPipe) offset: number,
    @Param('limit', ParseIntPipe) limit: number,
  ) {
    return this.pokeDataService.getPokemonName(offset, limit);
  }
}
