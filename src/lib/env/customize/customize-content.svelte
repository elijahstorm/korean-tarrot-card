<script lang="ts">
	const attributes = [
		{
			value: 'bg-blue-500',
			name: 'Blue',
		},
		{
			value: 'bg-red-500',
			name: 'Red',
		},
		{
			value: 'bg-green-500',
			name: 'Green',
		},
		{
			value: 'bg-yellow-500',
			name: 'Yellow',
		},
	]

	let selectedAttribute = ''

	const selectAttribute = (attribute: string) => () => (selectedAttribute = attribute)
</script>

<div class="flex gap-4">
	<div class="w-2/5">
		<div class="card p-4 m-4 {selectedAttribute}" />
	</div>

	<div class="w-3/5 flex flex-col gap-6 text-xs">
		<div class="flex gap-4 custom-scrollbar p-1 pb-4">
			{#each attributes as attribute}
				<button
					on:click={selectAttribute(attribute.value)}
					class="btn w-14 h-36 rounded overflow-clip ring-2 ring-offset-2 ring-gray-600 ring-offset-black focus:ring-2 focus:ring-opacity-100 {attribute.value}"
					class:ring-gray-600={selectedAttribute !== attribute.value}
					class:ring-white={selectedAttribute === attribute.value}
					type="button"
				/>
			{/each}
		</div>

		<div class="mx-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />

		<div class="flex gap-4 custom-scrollbar pb-4">
			{#each attributes as attribute}
				<div
					class="octagon aspect-1 w-[6.6rem]"
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
