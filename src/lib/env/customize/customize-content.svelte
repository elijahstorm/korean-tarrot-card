<script lang="ts">
	import { fly } from 'svelte/transition'

	const attributes = [
		{
			id: 0,
			value: 'bg-blue-500',
			name: 'Blue',
		},
		{
			id: 1,
			value: 'bg-red-500',
			name: 'Red',
		},
		{
			id: 2,
			value: 'bg-green-500',
			name: 'Green',
		},
		{
			id: 3,
			value: 'bg-yellow-500',
			name: 'Yellow',
		},
	]

	let selectedAttribute = ''

	const selectAttribute = (attribute: string) => () => (selectedAttribute = attribute)
</script>

<div class="flex gap-4 pt-8">
	<div class="flex-1">
		<div
			class="card max-h-full p-4 m-4 ring-offset-2 ring-gray-600 ring-offset-black ring-2 ring-opacity-100 {selectedAttribute}"
		/>
	</div>

	<div class="flex flex-col gap-12 text-xs">
		<div class="flex gap-4 custom-scrollbar p-1 pb-4">
			{#each attributes as attribute, index (attribute.id)}
				<button
					in:fly={{ y: 50, delay: (1 + index) * 100, duration: 200 }}
					on:click={selectAttribute(attribute.value)}
					class="btn w-14 h-36 rounded overflow-clip ring-2 ring-offset-2 ring-offset-black {attribute.value}"
					class:ring-gray-600={selectedAttribute !== attribute.value}
					class:ring-white={selectedAttribute === attribute.value}
					type="button"
				/>
			{/each}
		</div>

		<div class="mx-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />

		<div class="flex gap-4 custom-scrollbar pb-4">
			{#each attributes as attribute, index (attribute.id)}
				<div
					in:fly={{ y: 50, delay: (3 + index) * 100, duration: 200 }}
					class="octagon aspect-1 w-[6.6rem] transition"
					class:bg-gray-600={selectedAttribute !== attribute.value}
					class:bg-white={selectedAttribute === attribute.value}
				>
					<div class="octagon aspect-1 w-[6.4rem] bg-black">
						<button
							on:click={selectAttribute(attribute.value)}
							class="btn aspect-1 w-24 octagon px-4 py-2 hover:bg-gray-200 mt-[0.2rem] overflow-clip ring-1 ring-offset-1 ring-gray-400 ring-offset-gray-300 {attribute.value}"
							type="button"
						>
							{attribute.name}
						</button>
					</div>
				</div>
			{/each}
		</div>
	</div>
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
