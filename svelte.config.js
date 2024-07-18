import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import adapterNetlify from '@sveltejs/adapter-netlify'
import adapterStatic from '@sveltejs/adapter-static'

console.log('config', process.env.NODE_ENV)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: process.env.NODE_ENV ? adapterStatic() : adapterNetlify(),
	},
	preprocess: vitePreprocess(),
}

export default config
