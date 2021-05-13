export const capitalize = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const renderPokemonImage = (id) => {
  const urlPicture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
  return urlPicture;
}

export const setBgColorCardPokemon = (types, setBgColor) => {
  const typeToAplly = types.find((type) => type !== 'normal')
  switch (typeToAplly) {
    case 'grass':
      setBgColor('#48d0b0')
      break;
    case 'fire':
      setBgColor('#fb6c6c')
      break;
    case 'water':
      setBgColor('#76bdfe')
      break;
    case 'bug':
      setBgColor('#6bad4a')
      break;
    case 'poison':
      setBgColor('#b561b5')
      break;
    case 'electric':
      setBgColor('#ffce4b')
      break;
    case 'ground':
      setBgColor('#e6bd5a')
      break;
    case 'fairy':
      setBgColor('#efa3b1')
      break;
    case 'fighting':
      setBgColor('#a47b73')
      break;
    case 'psychic':
      setBgColor('#c5a410')
      break;
    case 'rock':
      setBgColor('#8b8b94')
      break;
    case 'ghost':
      setBgColor('#62317b')
      break;
    case 'flying':
      setBgColor('#c9b96c')
      break;
    case 'ice':
      setBgColor('#4395e8')
      break;
    case 'dragon':
      setBgColor('#f7b251')
      break;
    case 'dark':
      setBgColor('#253960')
      break;
    default:
      setBgColor('#8eadcc')
      break;
  }
}