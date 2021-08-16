<script>
	import Nav from '../components/Nav.svelte';
</script>

<div class="max-w-6xl mx-auto p-8">
	<Nav />
	<slot />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
