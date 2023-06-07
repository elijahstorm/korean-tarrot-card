<script lang="ts">
	import { selectedAttribute, selectedGround } from './customize'
	import { base } from '$app/paths'
	import PerfectOctagon from './perfect-octagon.svelte'
	import TallRectangle from './tall-rectangle.svelte'

	const attributes = [
		{
			id: 0,
			value: 'bg-transparent',
		},
		{
			id: 1,
			value: 'bg-gradient-to-b from-[#FFD4AC] to-[#DF89A8]',
		},
		{
			id: 2,
			value: 'bg-gradient-to-b from-[#D6E1BC] to-[#6A7EFF]',
		},
		{
			id: 3,
			value: 'bg-gradient-to-b from-[#FFDC98] to-[#848D4D]',
		},
		{
			id: 4,
			value: 'bg-gradient-to-b from-[#0D172D] to-[#B67B70]',
		},
		{
			id: 5,
			value: 'bg-gradient-to-b from-[#FFBCB3] to-[#FFF6BE]',
		},
		{
			id: 6,
			value: 'bg-gradient-to-b from-[#ECB5BB] to-[#514169]',
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
