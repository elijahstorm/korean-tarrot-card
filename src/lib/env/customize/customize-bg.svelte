<script lang="ts">
	import { selectedAttribute, selectedGround } from './customize'
	import { base } from '$app/paths'
	import PerfectOctagon from './perfect-octagon.svelte'
	import TallRectangle from './tall-rectangle.svelte'

	const attributes = [
		{
			id: 0,
			value: 'bg-transparent',
			name: 'Blue',
		},
		{
			id: 1,
			value: 'bg-blue-500',
			name: 'Blue',
		},
		{
			id: 2,
			value: 'bg-red-500',
			name: 'Red',
		},
		{
			id: 3,
			value: 'bg-green-500',
			name: 'Green',
		},
		{
			id: 4,
			value: 'bg-yellow-500',
			name: 'Yellow',
		},
	]

	const totalBackgrounds = 4

	const selectAttribute = (attribute: string) => () => selectedAttribute.set(attribute)
	const selectGround = (bg: number) => () => selectedGround.set(bg)
</script>

<div class="flex gap-4 custom-scrollbar p-1 pb-4">
	{#each attributes as attribute, index (attribute.id)}
		<TallRectangle
			{index}
			color={attribute.value}
			action={selectAttribute(attribute.value)}
			selected={$selectedAttribute === attribute.value}
		/>
	{/each}
</div>

<div class="mx-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />

<div class="flex gap-4 custom-scrollbar pb-4">
	{#each new Array(totalBackgrounds) as _, index (index)}
		<PerfectOctagon
			index={index + 2}
			action={selectGround(index)}
			selected={$selectedGround === index}
		>
			<img
				class="object-cover"
				src="{base}/customize/ground/{index}-3.png"
				alt="background {index}"
			/>
		</PerfectOctagon>
	{/each}
</div>
