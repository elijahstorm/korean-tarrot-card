<script lang="ts">
	import BgVideo from '$lib/comp/bg-video.svelte'
	import { allCards } from '$lib/sources/cardData'
	import { allItems } from '$lib/sources/itemData'
	import { currentDisplayedScene, roadmapData } from '$lib/stores/state'

	const getDataFromId = <T extends { id: number }>(dataSource: T[], currentState?: number) =>
		dataSource.find((data) => data.id === currentState) ?? dataSource[0]

	const getItem = (card: Card, item: number) =>
		item === 0 ? 'start' : allItems[card.items[item - 1]].name
</script>

<BgVideo
	cover
	src="scenes/{getDataFromId(allCards, $currentDisplayedScene).title}/{getItem(
		getDataFromId(allCards, $currentDisplayedScene),
		$roadmapData?.currentTab ?? 0
	)}.mp4"
/>
