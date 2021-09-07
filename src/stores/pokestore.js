import { writable } from 'svelte/store';

export const pokemon = writable([]);
const pokemonDetails = {};
let loaded = false;

/**
 * Fetch the pokemon list from the PokeAPI.
 *
 * @see https://svelte.dev/docs#svelte_store
 * @see https://pokeapi.co/docs/v2
 */
export async function fetchPokemon() {
	if (loaded) {
		return;
	}

	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=150`);
		const data = await res.json();
		const loadedPokemon = data.results.map((data, index) => ({
			name: data.name,
			id: index + 1,
			image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
				index + 1
			}.png`
		}));
		pokemon.set(loadedPokemon);
		loaded = true;
	} catch (err) {
		console.error(err);
		return null;
	}
}

/**
 * Fetch indivdual pokemon details from the PokeAPI.
 *
 * @see https://pokeapi.co/docs/v2
 * @param {number} id The ID of a pokémon.
 * @returns {object}  The details of a pokémon.
 */
export async function getPokemonById(id) {
	if (pokemonDetails[id]) {
		return pokemonDetails[id];
	}

	try {
		const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
		const data = await res.json();
		pokemonDetails[id] = data;
		return data;
	} catch (err) {
		console.error(err);
		return null;
	}
}
