import { Controller, Get, Param } from '@nestjs/common';
import { PokedataService } from '../service/pokedata/pokedata.service';
@Controller('pokedata')
export class PokedataController {
  constructor(private pokeDataService: PokedataService) {}
  @Get('pokemon/:offset/:limit')
  getPokemon(@Param('offset') offset: string, @Param('limit') limit: string) {
    return this.pokeDataService.getPokemonName(offset, limit);
  }
}
