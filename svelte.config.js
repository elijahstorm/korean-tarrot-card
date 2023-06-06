import adapter from '@sveltejs/adapter-auto'
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
			hostineSite: 'data',
			precompress: false,
			fallback: 'index.html',
		}),
	},
}

export default config
