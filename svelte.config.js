import adapter from '@sveltejs/adapter-static'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '200.html'
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		prerender: {
			pages: ['*']
		}
	}
};

export default config;
