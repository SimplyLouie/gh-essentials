// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://SimplyLouie.github.io',
	base: '/gh-essentials',
	integrations: [
		starlight({
			title: 'GitHub Essentials',
			social: {
				github: 'https://github.com/SimplyLouie/gh-essentials',
			},
			sidebar: [
				{
					label: 'Fundamentals',
					autogenerate: { directory: 'fundamentals' },
				},
				{
					label: 'Collaboration',
					autogenerate: { directory: 'collaboration' },
				},
				{
					label: 'Advanced',
					autogenerate: { directory: 'advanced' },
				},
			],
		}),
	],
});
