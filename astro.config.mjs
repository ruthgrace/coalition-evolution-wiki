// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://ruthgracewong.github.io',
	base: '/coalition-evolution-wiki',
	integrations: [
		starlight({
			title: 'Coalition Evolution',
			description: 'A literature review on how coalitions of power change over time.',
			sidebar: [
				{
					label: 'Sections',
					autogenerate: { directory: 'sections' },
				},
				{
					label: 'Papers',
					autogenerate: { directory: 'papers' },
				},
				{
					label: 'Terminology',
					autogenerate: { directory: 'terminology' },
				},
			],
		}),
	],
});
