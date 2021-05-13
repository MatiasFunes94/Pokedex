import React, { useContext, useEffect, useState } from 'react';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonContext } from '../context/PokemonContext';
import { Chain, PokemonEvolutionChain } from '../interfaces/evolutionChainInterface';
import { PokemonSpecies, EvolutionChain } from '../interfaces/speciesInterface';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';
import { PokemonDetail } from '../interfaces/pokemonDetailInterface';
import { renderPokemonImage } from '../utils';

export interface evolutionEveeProps {
  name: string;
  id: number;
}

const useEvolution = (id: number) => {

  const { pokemonList } = useContext(PokemonContext);

  const [evolutionPokemon, setEvolutionPokemon] = useState<SimplePokemon[]>([]);
  const [evolutionEvee, setEvolutionEvee] = useState<evolutionEveeProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const getSpecies = async () => {
    const resp = await pokemonApi.get<PokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)
    getEvolutionChain(resp.data.evolution_chain);
  }

  const getEvolutionChain = async ({ url }: EvolutionChain) => {
    const resp = await pokemonApi.get<PokemonEvolutionChain>(url)
    if (url === 'https://pokeapi.co/api/v2/evolution-chain/67/') {
      return getEveeEvolutions(resp.data.chain);
    }
    getPokemonNames(resp.data.chain)
  }

  const getEveeEvolutions = async (evolutionChain: Chain) => {
    let eveeEvolutionChain = [];
    eveeEvolutionChain.push(evolutionChain?.species.name)
    evolutionChain?.evolves_to.map((x) => eveeEvolutionChain.push(x.species.name))
    let eveeEvolutionsNamesAndPictures: evolutionEveeProps[] = [];
    Promise.all(eveeEvolutionChain.map(async (name) => {
      const eveeEvolutionDetailResp = await pokemonApi.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      eveeEvolutionsNamesAndPictures.push({ 
        name: eveeEvolutionDetailResp.data.name,
        id: eveeEvolutionDetailResp.data.id 
      })
      if (eveeEvolutionsNamesAndPictures.length === 9) {
        setEvolutionEvee(eveeEvolutionsNamesAndPictures)
      }
    }))
    setIsLoading(false)
  }

  const getPokemonNames = (evolutionChain: Chain) => {
    let pokemonEvolutionChain = [];
    pokemonEvolutionChain.push(evolutionChain?.species.name)
    pokemonEvolutionChain.push(evolutionChain?.evolves_to[0]?.species.name)
    pokemonEvolutionChain.push(evolutionChain?.evolves_to[0]?.evolves_to[0]?.species.name)
    getEvolutionData(pokemonEvolutionChain)
  }

  const getEvolutionData = (pokemonEvolutionChain: string[]) => {
    let pokemonEvolution: any = [];
    const firstEvolution = pokemonList.find((pokemon) => pokemon.name === pokemonEvolutionChain[0]);
    pokemonEvolution.push(firstEvolution);
    const secondEvolution = pokemonList.find((pokemon) => pokemon.name === pokemonEvolutionChain[1]);
    pokemonEvolution.push(secondEvolution);
    const thirdEvolution = pokemonList.find((pokemon) => pokemon.name === pokemonEvolutionChain[2]);
    pokemonEvolution.push(thirdEvolution);
    setEvolutionPokemon(pokemonEvolution);
    setIsLoading(false)
  }

  useEffect(() => {
    getSpecies();
  }, [])
  
  return {
    evolutionPokemon,
    evolutionEvee,
    isLoading,
  }
}

export default useEvolution;