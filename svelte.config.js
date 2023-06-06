import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/kit/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		outDir: 'docs',
		adapter: adapter({}),
		paths: {
			base: '/korean-tarrot-card',
		},
		// prerender: {
		// 	handleHttpError
		// }
	},
}

export default config
