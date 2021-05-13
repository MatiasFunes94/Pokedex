import React, { createContext } from 'react';
import usePokemonPaginated from '../hooks/usePokemonPaginated';
import usePokemonSearch from '../hooks/usePokemonSearch';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

interface PokemonContextProps {
  pokemonList: SimplePokemon[];
  loadPokemons: () => void;
}

export const PokemonContext = createContext({} as PokemonContextProps);

export const PokemonProvider = ({ children }: any) => {
  const { simplePokemonList, loadPokemons } = usePokemonPaginated();
  const { pokemonList } = usePokemonSearch();

  return (
    <PokemonContext.Provider value={{
      pokemonList,
      loadPokemons,
    }}>
      {children}
    </PokemonContext.Provider>
  )
}