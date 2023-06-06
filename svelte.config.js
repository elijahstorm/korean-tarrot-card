import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { preprocessThrelte } from '@threlte/preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: seqPreprocessor([vitePreprocess(), preprocessThrelte()]),

	kit: {
		outDir: 'docs',
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			precompress: false,
			fallback: 'index.html',
		}),
		paths: {
			base: '/korean-tarrot-card',
		},
		// prerender: {
		// 	handleHttpError
		// }
	},
}

export default config
