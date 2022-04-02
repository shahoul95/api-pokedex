import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class PokedataService {
  async getPokemonName(offset: string, limit: string) {
    return await axios
      .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
      .then(function (res) {
        return res.data;
      })
      .catch(function (error) {
        throw error;
      });
  }
}
