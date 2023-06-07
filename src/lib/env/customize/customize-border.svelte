<script lang="ts">
	import { selectedBorder, selectedBorderColor } from './customize'
	import { base } from '$app/paths'
	import { fly } from 'svelte/transition'
	import IrregularOctagon from './irregular-octagon.svelte'

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
		<button
			in:fly={{ y: 50, delay: (1 + index) * 100, duration: 200 }}
			on:click={selectColor(color)}
			class="btn w-36 h-14 rounded overflow-clip ring-2 ring-offset-2 ring-offset-black focus:ring-blue-400 {color}"
			class:ring-gray-600={$selectedBorderColor !== color}
			class:ring-white={$selectedBorderColor === color}
			type="button"
		/>
	{/each}
</div>
