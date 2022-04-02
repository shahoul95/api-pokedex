import { Injectable } from '@nestjs/common';
import axios from 'axios';
@Injectable()
export class PokedataService {
  async getPokemonName(url: string) {
    return await axios
      .get(url)
      .then(function (res) {
        return res.data;
      })
      .catch(function (error) {
        throw error;
      });
  }

  async getAllPokemon() {
    return await axios
      .get('https://pokeapi.co/api/v2/pokemon?limit=150')
      .then(function (res) {
        return res.data.results;
      })
      .catch(function (error) {
        throw error;
      });
  }
}
