import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { remarkReadingTime } from './src/utils/readTime.ts';

import lambdaAdapter from '@common-web/astro-lambda-edge';

// https://astro.build/config
export default defineConfig({
	site: 'https://mike-hoang-dev.vercel.app/',
	// Write here your website url
	markdown: {
		remarkPlugins: [remarkReadingTime],
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	integrations: [mdx({
		syntaxHighlight: 'shiki',
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		},
		drafts: true
	}), sitemap(), tailwind()],

	output: 'server',
	adapter: lambdaAdapter()
});