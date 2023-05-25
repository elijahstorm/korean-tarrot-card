<script>
	import { viewCardsState, viewResultsState, viewSceneState } from '$lib/utils/changeState'
	import { roadmapData } from '$lib/stores/state'
	import { Lang } from '$lib/sources/lang'
</script>

<div class="flex h-full justify-end items-end relative bottom-0">
	{#if [...new Set($roadmapData?.seen)].length >= 3}
		<div class="flex gap-8 pr-8">
			<button
				on:click={viewSceneState}
				class="p-2 aspect-1 rounded-full border border-zinc-500 hover:bg-zinc-700"
				type="button"
			>
				rep.
			</button>

			<button
				on:click={viewCardsState}
				class="px-6 py-2 border border-zinc-500 rounded-md hover:bg-zinc-700"
				type="button"
			>
				{Lang.scene.repeatButton}
			</button>

			<button
				on:click={viewResultsState}
				class="px-6 py-2 border border-zinc-500 rounded-md hover:bg-zinc-700"
				type="button"
			>
				{Lang.scene.gotoResults}
			</button>
		</div>
	{/if}
</div>
