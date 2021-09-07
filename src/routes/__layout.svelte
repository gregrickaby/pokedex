<script>
	import Nav from '../components/Nav.svelte';
</script>

<svelte:head>
	<link rel="preconnect" href="https://pokeapi.co" />
	<link rel="preconnect" href="https://raw.githubusercontent.com" />
	<meta name="description" content="A Pokédex powered by SvelteKit and the PokeAPI." />
</svelte:head>

<div class="max-w-6xl mx-auto p-8">
	<Nav />
	<slot>No children provided.</slot>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
