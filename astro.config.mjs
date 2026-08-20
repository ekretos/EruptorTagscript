// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.eruptor.bot',
	vite: {
		build: {
			emptyOutDir: false,
		},
	},
	integrations: [
		starlight({
			title: 'Eruptor Docs',
			description: 'The definitive guide and reference manual for Eruptor Bot’s TagScript & Trigger Engine.',
			social: {
				github: 'https://github.com/Ekretos',
			},
			customCss: [
				'./src/styles/custom.css',
			],
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 3,
			},
			sidebar: [
				{
					label: '🚀 Getting Started',
					items: [
						{ label: 'Introduction & Philosophy', slug: 'getting-started/introduction' },
						{ label: 'Quickstart Guide', slug: 'getting-started/quickstart' },
						{ label: 'Syntax & Anatomy', slug: 'getting-started/syntax-and-anatomy' },
					],
				},
				{
					label: '🧩 Variables & Transformers',
					items: [
						{ label: 'Track & Song Metadata', slug: 'variables/track-and-song' },
						{ label: 'Player & Queue State', slug: 'variables/player-and-queue' },
						{ label: 'User & Member Context', slug: 'variables/user-and-member' },
						{ label: 'Guild & Channel Context', slug: 'variables/guild-and-channel' },
						{ label: 'Message & Arguments', slug: 'variables/message-and-args' },
					],
				},
				{
					label: '🔀 Control Flow & Logic',
					items: [
						{ label: 'Conditional Logic ({if})', slug: 'control-flow/if-conditions' },
						{ label: 'Logic & Math Functions', slug: 'control-flow/logic-and-math' },
						{ label: 'String Manipulation', slug: 'control-flow/string-manipulation' },
					],
				},
				{
					label: '🎨 Visuals & Embed Design',
					items: [
						{ label: 'Discord Embed Builder', slug: 'embeds-and-ui/embed-builder' },
						{ label: 'UI Layouts & Design Mastery', slug: 'embeds-and-ui/ui-engineering' },
					],
				},
				{
					label: '🎵 Music & Audio Engine',
					items: [
						{ label: 'Playback & Queuing', slug: 'music-and-audio/playback-and-queuing' },
						{ label: 'Live Music Recommendations', slug: 'music-and-audio/live-suggestions' },
						{ label: 'Audio Playback Controls', slug: 'music-and-audio/playback-controls' },
						{ label: 'Studio Audio Presets', slug: 'music-and-audio/audio-presets' },
						{ label: 'Custom Audio Tuner & EQ', slug: 'music-and-audio/custom-audio-tuner' },
					],
				},
				{
					label: '🛡️ Security & Controls',
					items: [
						{ label: 'Role & DJ Permissions', slug: 'security-and-controls/permissions' },
						{ label: 'Rate Limiting & Cooldowns', slug: 'security-and-controls/rate-limiting' },
					],
				},
				{
					label: '📚 Ready-to-Use Recipes',
					items: [
						{ label: 'Music Automation Recipes', slug: 'recipes/music-automation' },
						{ label: 'Custom Audio Filter Recipes', slug: 'recipes/audio-filters' },
						{ label: 'Auto-Responders & Assistants', slug: 'recipes/auto-responders' },
						{ label: 'Server Utilities & Moderation', slug: 'recipes/server-utilities' },
						{ label: 'Economy & Interactive Games', slug: 'recipes/fun-and-games' },
					],
				},
				{
					label: '🛠️ Troubleshooting',
					items: [
						{ label: 'Common Errors & Gotchas', slug: 'troubleshooting/common-errors' },
						{ label: 'Diagnostics & Best Practices', slug: 'troubleshooting/diagnostics' },
					],
				},
			],
		}),
	],
});
