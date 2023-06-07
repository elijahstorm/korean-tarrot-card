<script lang="ts">
	import { selectedBorder, selectedBorderColor } from './customize'
	import { base } from '$app/paths'
	import IrregularOctagon from './irregular-octagon.svelte'
	import TallRectangle from './tall-rectangle.svelte'

	const frameAmount = 5
	const colors = ['bg-blue-500', 'bg-red-500', 'bg-green-500', 'bg-yellow-500']

	const select = (frame: number) => () => selectedBorder.set(frame)
	const selectColor = (color: string) => () => selectedBorderColor.set(color)
</script>

<div
	class="grid grid-cols-3 gap-4 justify-items-center items-center custom-scrollbar px-8 pb-4 max-h-96"
>
	{#each new Array(frameAmount) as _, index (index)}
		<IrregularOctagon
			{index}
			action={select(index)}
			size={12}
			selected={$selectedBorder === index}
		>
			<img
				class="relative object-cover top-[5%] left-[5%]"
				src="{base}/customize/card frame/{index}.png"
				alt="Border Frame number {index}"
			/>
		</IrregularOctagon>
	{/each}
</div>

<div class="flex gap-4 custom-scrollbar p-1 pb-4">
	{#each colors as color, index (color)}
		<TallRectangle
			{index}
			{color}
			horizontal
			action={selectColor(color)}
			selected={$selectedBorderColor === color}
		/>
	{/each}
</div>
