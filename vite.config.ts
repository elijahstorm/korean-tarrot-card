import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	optimizeDeps: {
		include: ['postprocessing']
	},
	ssr: {
		noExternal: ['three', 'troika-three-text', 'postprocessing']
	}
});
