<script lang="ts">
	import { fly } from 'svelte/transition'
	import { selectedAttribute, selectedObject } from './customize'
	import { allItems } from '$lib/sources/itemData'
	import { base } from '$app/paths'

	const select = (item: Item) => () => selectedObject.set(item)
</script>

<div class="grid grid-cols-3 gap-4 custom-scrollbar pb-4 max-h-96">
	{#each allItems as item, index (item.id)}
		<div
			in:fly={{ y: 50, delay: (3 + index) * 100, duration: 200 }}
			class="octagon aspect-1 w-[6.6rem] transition"
		>
			<div class="octagon aspect-1 w-[6.4rem] bg-black">
				<button
					on:click={select(item)}
					class="btn aspect-1 w-24 octagon px-4 py-2 hover:bg-gray-200 mt-[0.2rem] overflow-clip ring-1 ring-offset-1 ring-gray-400 ring-offset-gray-300"
					type="button"
				>
					<img
						class="object-contain"
						src="{base}/items/{item.fileName}.png"
						alt={item.name}
					/>
				</button>
			</div>
		</div>
	{/each}
</div>

<style>
	.octagon {
		clip-path: polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%);
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
	}
</style>
