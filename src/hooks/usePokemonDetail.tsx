import { useEffect, useRef, useState } from 'react';

import { setBgColorCardPokemon } from '../utils/index';
import { pokemonApi } from '../api/pokemonApi';
import { PokemonDetail } from '../interfaces/pokemonDetailInterface';

const usePokemonDetail = (id: string) => {
  const [isLoading, setIsLoading] = useState(true)
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetail>()
  const [bgColor, setBgColor] = useState('')
  const [pokemonType, setPokemonType] = useState<string[]>([])

  const isMounted = useRef(true)

  const getPokemonDetail = async (id: string) => {
    const pokemonDetail = await pokemonApi.get<PokemonDetail>(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setPokemonDetail(pokemonDetail.data)
    getPokemonTypes(pokemonDetail.data);
  }

  const getPokemonTypes = (pokemonDetail: PokemonDetail) => {
    const types = pokemonDetail?.types.map((type: any) => type.type.name)
    setBgColorCardPokemon(types, setBgColor);
    setPokemonType(types);
    setIsLoading(false)
  }

  useEffect(() => {
    if (!isMounted.current) return;
    getPokemonDetail(id);
    return () => {
      isMounted.current = false;
    }
  }, [])
  
  return {
    pokemonDetail,
    pokemonType,
    bgColor,
    isLoading,
  }
}

export default usePokemonDetail;