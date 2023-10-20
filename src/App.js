import React, { useEffect, useState } from "react";
import PokemonThumbnail from "./PokemonThumbnail";

function App() {
	const [allPokemons, setAllPokemons] = useState([]);
	const [loadPoke, setLoadPoke] = useState(
		"https://pokeapi.co/api/v2/pokemon?limit=20"
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
		<div className="app-container">
			<h1>PokEmon KingDom</h1>
			<span><img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b3997ebc-1e83-48f2-9854-eb28c8c6a97b/debkf0q-ea4fb2bf-81e6-447f-99ff-3ab9bd7aad36.png/v1/fill/w_374,h_333/pikachu_by_msalliedog2_debkf0q-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzMzIiwicGF0aCI6IlwvZlwvYjM5OTdlYmMtMWU4My00OGYyLTk4NTQtZWIyOGM4YzZhOTdiXC9kZWJrZjBxLWVhNGZiMmJmLTgxZTYtNDQ3Zi05OWZmLTNhYjliZDdhYWQzNi5wbmciLCJ3aWR0aCI6Ijw9Mzc0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.MWQrl27zG8iPNJGAQx6nFlTVk8l5U1UCjA8nH-4OdEA" alt="Spain" /></span>

			<div className="pokemon-container">
				<div className="all-container">
					{allPokemons.map((pokemon, index) => (
						<PokemonThumbnail
							id={pokemon.id}
							name={pokemon.name}
							image={pokemon.sprites.other.dream_world.front_default}
							type={pokemon.types[0].type.name}
							key={index}
							height={pokemon.height}
							weight={pokemon.weight}
							stat1={pokemon.stats[0].stat.name}
							stat2={pokemon.stats[1].stat.name}
							stat3={pokemon.stats[2].stat.name}
							stat4={pokemon.stats[3].stat.name}
							stat5={pokemon.stats[4].stat.name}
							stat6={pokemon.stats[5].stat.name}
							bs1={pokemon.stats[0].base_stat}
							bs2={pokemon.stats[1].base_stat}
							bs3={pokemon.stats[2].base_stat}
							bs4={pokemon.stats[3].base_stat}
							bs5={pokemon.stats[4].base_stat}
							bs6={pokemon.stats[5].base_stat}
						/>
					))}
				</div>
				<button className="load-more"
					onClick={() => getAllPokemons()}>
					More Pokemons
				</button>
			</div>
		</div>
	);
}

export default App;