import React, { useEffect, useState } from 'react'
const [allPokemons, setAllPokemons] = useState([]);
const [loadPoke, setLoadPoke] = useState(
  'https://pokeapi.co/api/v2/pokemon/ditto'
);
const getAllPokemons = async () => {
  const res = await fetch(loadPoke);
  const data = await res.json();
  setLoadPoke(data.next);

  function createPokemonObject(result) {
    result.forEach(async (pokemon) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
      );
      const data = await res.json();
      setAllPokemons((currentList) => [...currentList, data]);
    });
  }
  createPokemonObject(data.results);
  await console.log(allPokemons);
};

useEffect(() => {
  getAllPokemons();
}, []);
return (
  <div>
    {allPokemons.map((pokemon) => {
      console.log(pokemon);
      return (
        <h1>{pokemon.name}</h1>
      );
    })}


  </div>

)


export default Content
