<script lang="ts">
	import { selectedObject } from './customize'
	import { base } from '$app/paths'
	import PerfectOctagon from './perfect-octagon.svelte'
	import { allCards } from '$lib/sources/cardData'
	import { memoize } from '$lib/utils/utils'
	import { allItems } from '$lib/sources/itemData'
	import { fly } from 'svelte/transition'

	const select = (item: Item) => () => selectedObject.set(item)

	const itemsFromIds = memoize((card: Card): Item[] =>
		allItems.filter((item) => card.items.includes(item.id))
	)

	const cardFromItem = memoize(
		(item: Item): Card => allCards.find((card) => card.items.includes(item.id)) ?? allCards[0]
	)
</script>

<div
	class="grid grid-cols-4 gap-4 justify-items-center items-center custom-scrollbar px-8 pb-4 max-h-96"
>
	{#each allCards as card, cardIndex (card.id)}
		<p class="opacity-70" in:fly={{ y: 50, delay: cardIndex * 4 * 100, duration: 200 }}>
			{card.title}
		</p>

		{#each itemsFromIds(card) as item, index (item.id)}
			<PerfectOctagon
				index={cardIndex * 4 + index + 1}
				action={select(item)}
				selected={$selectedObject === item}
			>
				<img
					class="object-contain mix-blend-screen"
					src="{base}/items/{item.fileName}.png"
					alt={item.name}
				/>
			</PerfectOctagon>
		{/each}
	{/each}
</div>

<div in:fly>
	<p class="text-xl">
		<span class="font-thin opacity-70">
			{cardFromItem($selectedObject).title}
		</span>

		<span class="">
			{$selectedObject.name}
		</span>
	</p>

	<hr class="my-4 opacity-20" />

	<p class="opacity-70">
		{$selectedObject.info}
	</p>
</div>
