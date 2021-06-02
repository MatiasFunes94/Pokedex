import React, { useEffect, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

const usePokemonSearch = () => {

  const [isFetching, setIsFetching] = useState(true)
  const [pokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>('https://pokeapi.co/api/v2/pokemon?limit=1118');
    mapPokemonList(resp.data.results)
  }

  const mapPokemonList = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map((pokemon) => {
      const {
        name,
        url
      } = pokemon;
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
      return { id, name, picture }
    })
    setSimplePokemonList(newPokemonList)
    setIsFetching(false);
  }
  
  useEffect(() => {
    loadPokemons();
  }, [])

  return {
    pokemonList,
    isFetching,
  }

}

export default usePokemonSearch;