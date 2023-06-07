<script lang="ts">
	import { selectedPerson } from './customize'
	import { base } from '$app/paths'
	import { allCards } from '$lib/sources/cardData'
	import { fly } from 'svelte/transition'
	import IrregularOctagon from './irregular-octagon.svelte'

	const select = (card: Card) => () => selectedPerson.set(card)
</script>

<div
	class="grid grid-cols-3 gap-4 justify-items-center items-center custom-scrollbar px-8 pb-4 max-h-96"
>
	{#each allCards as card, index (card.id)}
		<IrregularOctagon
			{index}
			action={select(card)}
			size={12}
			selected={$selectedPerson.id === card.id}
		>
			<img
				class="relative object-cover w-[120%] h-[120%] -top-[15%]"
				src="{base}/customize/persons/{card.fileName}.png"
				alt={card.title}
			/>
		</IrregularOctagon>
	{/each}
</div>

<div in:fly>
	<p class="text-xl">
		<span class="font-thin opacity-70">
			{$selectedPerson.title}
		</span>

		<span class="">
			{$selectedPerson.info}
		</span>
	</p>

	<hr class="my-4 opacity-20" />

	<p class="opacity-70">
		{$selectedPerson.description}
	</p>
</div>
