<script context="module">
	import { getPokemonById } from '../../stores/pokestore';

	export async function load(context) {
		let id = context.page.params.id;
		const pokeman = await getPokemonById(id);

		return {
			props: { pokeman }
		};
	}
</script>

<script>
	export let pokeman;
</script>

<svelte:head>
	<title>Pokedex - {pokeman.name}</title>
	<meta name="description" content="Learn more about {pokeman.name}" />
</svelte:head>

<div class="flex flex-col items-center">
	<h1 class="text-4xl text-center my-8 uppercase">{pokeman.name}</h1>
	<p>
		Type: <strong>{pokeman.types[0].type.name}</strong> | Height: <strong>{pokeman.height}</strong>
		| Weight: <strong>{pokeman.weight}</strong>
	</p>

	<img
		alt={pokeman.name}
		loading="eager"
		src={pokeman.sprites['front_default']}
		height="160"
		width="160"
	/>
</div>
