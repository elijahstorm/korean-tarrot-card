<script lang="ts">
	import { base } from '$app/paths'
	import { selectedAttribute, selectedBorder, selectedPerson } from './customize'
	import CustomizeBg from './customize-bg.svelte'
	import CustomizeBorder from './customize-border.svelte'
	import CustomizeObject from './customize-object.svelte'
	import CustomizePerson from './customize-person.svelte'

	const categories = [
		{
			name: '배경',
			component: CustomizeBg,
		},
		{
			name: '프레임',
			component: CustomizeBorder,
		},
		{
			name: '캐릭터',
			component: CustomizePerson,
		},
		{
			name: '오브젝트',
			component: CustomizeObject,
		},
	]

	let selectedCategory = 0
</script>

<div class="flex gap-4 pt-8 justify-center w-full">
	<div style="flex: 2" />

	<div style="flex: 5">
		<div
			class="card relative overflow-clip rounded-[0.25rem] max-h-full m-4 ring-offset-2 ring-gray-600 ring-offset-black ring-2 ring-opacity-100 {$selectedAttribute}"
		>
			<img
				class="absolute -top-4 right-1 w-48"
				src="{base}/customize/cloud/1.png"
				alt="cloud 1"
			/>

			<img
				class="absolute top-1/4 -right-42.6%"
				src="{base}/customize/cloud/2.png"
				alt="cloud 2"
			/>

			<img
				class="relative object-cover"
				src="{base}/customize/persons/full/{$selectedPerson.fileName}.png"
				alt="person"
			/>

			<img
				class="absolute top-1/2 -left-40"
				src="{base}/customize/cloud/2.png"
				alt="cloud 2"
			/>

			<img
				class="absolute top-1/2 -right-32"
				src="{base}/customize/cloud/3.png"
				alt="cloud 3"
			/>

			<img
				class="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)]"
				src="{base}/customize/card frame/full/{$selectedBorder}.png"
				alt="person"
			/>
		</div>
	</div>

	<div style="flex: 1" />

	<div class="flex flex-col gap-12 text-xs" style="flex: 8">
		<div class="flex justify-around">
			{#each categories as category, index (category)}
				<button
					class="relative py-0.5 px-8 group"
					on:click={() => (selectedCategory = index)}
				>
					<div
						class="absolute inset-0 opacity-0 transition-opacity bg-gradient-to-r from-transparent via-white to-transparent blur-sm group-hover:opacity-20"
						class:opacity-40={selectedCategory === index}
						class:group-hover:opacity-40={selectedCategory === index}
					/>

					<div
						class="absolute left-0 -bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-0 transition-opacity group-hover:opacity-20"
						class:opacity-60={selectedCategory === index}
						class:group-hover:opacity-60={selectedCategory === index}
					/>

					<p class="relative text-lg select-none">
						{category.name}
					</p>
				</button>
			{/each}
		</div>

		{#each categories as category, index (category)}
			{#if selectedCategory === index}
				{#key category.name}
					<svelte:component this={category.component} />
				{/key}
			{/if}
		{/each}
	</div>

	<div style="flex: 1" />
</div>
