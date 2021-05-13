import React, { useEffect, useRef, useState } from 'react'
import { pokemonApi } from '../api/pokemonApi';
import { PokemonPaginatedResponse, SimplePokemon, Result } from '../interfaces/pokemonInterfaces';

const usePokemonPaginated = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>([])
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=20')

  const loadPokemons = async () => {
    const resp = await pokemonApi.get<PokemonPaginatedResponse>(nextPageUrl.current);
    nextPageUrl.current = resp.data.next;

    mapPokemonListToSimplePokemon(resp.data.results)
  }

  const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {
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
    setSimplePokemonList([...simplePokemonList, ...newPokemonList])
    setIsLoading(false);
  }
  
  useEffect(() => {
    loadPokemons();
  }, [])

  return {
    isLoading,
    simplePokemonList,
    loadPokemons,
  }

}

export default usePokemonPaginated;