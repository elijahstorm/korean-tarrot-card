<script lang="ts">
	import BgVideo from '$lib/comp/bg-video.svelte'
	import { allCards } from '$lib/sources/cardData'
	import { allItems } from '$lib/sources/itemData'
	import { currentDisplayedScene, roadmapData, showCardDisplay } from '$lib/stores/state'

	const getDataFromId = <T extends { id: number }>(dataSource: T[], currentState?: number) =>
		dataSource.find((data) => data.id === currentState) ?? dataSource[0]

	const getItem = (card: Card, item: number) =>
		item === 0 ? 'start' : allItems[card.items[item - 1]].fileName
</script>

<div class="bg-black absolute inset-0 w-full h-full overflow-hidden">
	<img
		class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
		src="backgrounds/cards/cards-bg.png"
		alt="card choice background"
	/>
</div>

{#if $showCardDisplay}
	<BgVideo
		cover
		src="scenes/{getDataFromId(allCards, $currentDisplayedScene).fileName}/{getItem(
			getDataFromId(allCards, $currentDisplayedScene),
			$roadmapData?.currentTab ?? 0
		)}.mp4"
	/>
{/if}
