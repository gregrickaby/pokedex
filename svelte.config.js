/** @type {import('@sveltejs/kit').Config} */

import adapter from '@sveltejs/adapter-static';
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		// https://github.com/sveltejs/kit/tree/master/packages/adapter-static
		adapter: adapter({
			assets: 'build',
			pages: 'build',
			fallback: null
		})
	}
};

export default config;
