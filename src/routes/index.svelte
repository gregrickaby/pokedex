<script>
	import Card from '../components/Card.svelte';
	import { pokemon, fetchPokemon } from '../stores/pokestore';

	let searchTerm = '';
	let filteredPokemon = [];

	$: {
		if (searchTerm) {
			filteredPokemon = $pokemon.filter((pokeman) =>
				pokeman.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
		} else {
			filteredPokemon = [...$pokemon];
		}
	}

	fetchPokemon();
</script>

<svelte:head>
	<title>Home - SvelteKit Pokédex</title>
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Pokédex</h1>
<input
	class="w-full rounded-md text-lg p-4 border-2 border-gray-200"
	bind:value={searchTerm}
	placeholder="Search Pokémon"
/>
<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols-1">
	{#each filteredPokemon as pokeman}
		<Card {pokeman} />
	{/each}
</div>
