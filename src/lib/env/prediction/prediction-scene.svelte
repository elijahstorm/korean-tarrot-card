<script lang="ts">
	import { base } from '$app/paths'
	import BgVideo from '$lib/comp/bg-video.svelte'
	import { allCards } from '$lib/sources/cardData'
	import { allItems } from '$lib/sources/itemData'
	import { quadOut, linear } from 'svelte/easing'
	import { Lang } from '$lib/sources/lang'
	import {
		currentDisplayedScene,
		description,
		roadmapData,
		showCardDisplay,
		viewState,
	} from '$lib/stores/state'
	import { get } from 'svelte/store'
	import { fade, fly } from 'svelte/transition'

	let innerWidth: number
	let card: Card

	const getDataFromId = <T extends { id: number }>(dataSource: T[], currentState?: number) =>
		dataSource.find((data) => data.id === currentState) ?? dataSource[0]

	const getItem = (card: Card, item: number) =>
		item === 0 ? 'start' : allItems[card.items[item - 1]].fileName

	currentDisplayedScene.subscribe((scene) => (card = getDataFromId(allCards, scene)))

	$: {
		if (get(showCardDisplay)) {
			description.set(card.description)
		}
	}
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	{#each new Array(4) as _, index}
		<link
			rel="preload"
			as="video"
			type="video/mp4"
			href="scenes/{card.fileName}/{getItem(card, index)}.mp4"
		/>
	{/each}
</svelte:head>

{#each new Array(4) as _, index}
	<video
		muted
		preload="auto"
		src="{base}/scenes/{card.fileName}/{getItem(card, index)}.mp4"
		class="absolute invisible"
	/>
{/each}

<img
	class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
	src="{base}/scenes/bgs/{card.fileName}.png"
	alt="card choice background"
/>

{#if $showCardDisplay}
	<div
		class="relative -top-12 text-white flex flex-col items-center justify-center h-full gap-2"
		in:fly
		out:fly={{
			duration: $viewState === 'scene' ? undefined : 0,
		}}
	>
		<div class="relative">
			<div
				class="absolute -top-3 -left-4 w-5 h-5 border-t border-l border-white opacity-40"
			/>
			<div
				class="absolute -top-2 -left-3 w-4 h-4 border-t border-l border-white opacity-40"
			/>
			<div
				class="absolute -bottom-2 -right-5 w-5 h-5 border-b border-r border-white opacity-40"
			/>
			<div
				class="absolute -bottom-1 -right-4 w-4 h-4 border-b border-r border-white opacity-40"
			/>

			<h2 class="absolute text-4xl font-maruburi blur opacity-60">
				{card.title}
			</h2>

			<h2 class="text-4xl font-maruburi">
				{card.title}
			</h2>
		</div>

		<h3 class="text-xl font-maruburi mt-2 mb-4">
			{Lang.timelineNames[$roadmapData?.currentTab ?? 0]}
		</h3>

		<div class="card w-1/5 relative">
			<img src="{base}/cards/{card.fileName}.png" alt={card.title} />

			<img
				class="absolute -top-[9.2%] -left-[20%] mix-blend-screen"
				src="{base}/scenes/card glow.png"
				alt="shine decor"
				in:fly={{ x: innerWidth / 7.5, delay: 400, duration: 1800, easing: quadOut }}
				out:fade={{ duration: 0 }}
			/>

			<img
				class="absolute -bottom-[8%] -right-[20%] mix-blend-screen opacity-70"
				src="{base}/scenes/card glow.png"
				alt="shine decor"
				in:fly={{ x: -innerWidth / 7.5, delay: 400, duration: 1800, easing: quadOut }}
				out:fade={{ duration: 0 }}
			/>
		</div>

		<p class="text-sm mt-4 opacity-30" in:fade={{ delay: 2200, duration: 600, easing: linear }}>
			{Lang.scene.startSceenInstructions}
		</p>
	</div>
{:else}
	<BgVideo
		cover
		src="scenes/{card.fileName}/{getItem(card, $roadmapData?.currentTab ?? 0)}.mp4"
	/>
{/if}
