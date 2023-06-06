<script lang="ts">
	import { viewResultsState, viewSceneState } from '$lib/utils/changeState'
	import {
		currentDisplayedScene,
		description,
		roadmapData,
		seenCardsState,
		selectedCardsState,
		showCardDisplay,
	} from '$lib/stores/state'
	import { Lang } from '$lib/sources/lang'
	import { fly } from 'svelte/transition'
	import { changeScene } from '$lib/stores/scenes'
	import { base } from '$app/paths'
	import { get } from 'svelte/store'
	import { pipe } from '$lib/utils/fp-ts'

	const nextCardScene = () =>
		pipe(showCardDisplay.set(true), () =>
			changeScene(
				get(selectedCardsState)[
					(get(selectedCardsState).findIndex(
						(card) => card.id === get(currentDisplayedScene)
					) +
						1) %
						3
				].id
			)
		)

	const toggleCardDisplay = (state: boolean) => () =>
		pipe(showCardDisplay.set(state), () => description.set(''))

	const repeat = () => pipe(showCardDisplay.set(true), viewSceneState)
</script>

{#if $showCardDisplay}
	<button on:click={toggleCardDisplay(false)} class="absolute inset-0" />
{:else}
	<div class="flex h-full justify-end items-end relative bottom-0">
		{#if [...new Set($roadmapData?.seenItems)].length >= 3}
			<div in:fly class="flex gap-8 pr-8">
				<button
					on:click={repeat}
					class="rounded-full border border-zinc-500 hover:bg-zinc-700 overflow-clip h-12 w-12"
					type="button"
				>
					<img
						src="{base}/nav/repeat.png"
						alt="repeat"
						style="object-position: -0.1px 0"
					/>
				</button>

				{#if [...new Set($seenCardsState)].length >= 3}
					<button
						on:click={viewResultsState}
						class="px-6 py-2 border border-zinc-500 rounded-md hover:bg-zinc-700"
						type="button"
					>
						{Lang.scene.gotoResults}
					</button>
				{:else}
					<button
						on:click={nextCardScene}
						class="px-6 py-2 border border-zinc-500 rounded-md hover:bg-zinc-700"
						type="button"
					>
						{Lang.scene.nextScreenButton}
					</button>
				{/if}
			</div>
		{/if}
	</div>
{/if}
