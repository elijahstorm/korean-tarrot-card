<script lang="ts">
	import { base } from '$app/paths'
	import { Lang } from '$lib/sources/lang'
	import { fly } from 'svelte/transition'
	import { selectedAttribute, selectedBorder, selectedPerson } from '../customize/customize'

	let showCreatedCard = false
</script>

{#if showCreatedCard}
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

		<img class="absolute top-1/2 -left-40" src="{base}/customize/cloud/2.png" alt="cloud 2" />

		<img class="absolute top-1/2 -right-32" src="{base}/customize/cloud/3.png" alt="cloud 3" />

		<img
			class="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)]"
			src="{base}/customize/card frame/full/{$selectedBorder}.png"
			alt="person"
		/>
	</div>
{:else}
	<div class="flex flex-col items-start h-full py-12 justify-between ml-32 max-h-[40rem]">
		<div
			in:fly={{ x: 200, delay: 400, duration: 800 }}
			class="grid intro-header font-extrabold"
		>
			<h1
				class="col-start-1 row-start-1 text-center mb-4 text-5xl font-maruburi blur-sm opacity-70"
			>
				{Lang.end.title}
			</h1>

			<h1 class="col-start-1 row-start-1 text-center mb-4 text-5xl font-maruburi">
				{Lang.end.title}
			</h1>
		</div>

		<div in:fly={{ x: 200, delay: 800, duration: 800 }} class="grid grid-credits gap-y-4">
			{#each Lang.end.teamInfo as teams}
				<team class="font-medium opacity-80">
					{teams.title}
				</team>

				<info class="opacity-70 font-thin">
					{teams.info}
				</info>
			{/each}
		</div>

		<div in:fly={{ x: 200, delay: 1200, duration: 800 }} class="grid grid-credits gap-y-4">
			{#each Lang.end.personInfo as people}
				<person class="font-medium opacity-80">
					{people.name}
				</person>

				<contact class="opacity-70 font-thin">
					{people.contact}
				</contact>
			{/each}
		</div>

		<div in:fly={{ x: 200, delay: 1600, duration: 800 }} class="space-y-6 hidden">
			<h4 class="font-bold text-lg">
				{Lang.end.music.title}
			</h4>

			<div class="grid grid-credits gap-y-4">
				{#each Lang.end.music.sounds as music}
					<song class="font-medium">
						{music.title}
					</song>

					<info class="opacity-70 font-thin">
						{music.info}
					</info>
				{/each}
			</div>
		</div>
	</div>
{/if}

<style>
	.intro-header {
		mask-image: gradient(
			linear,
			center top,
			center bottom,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);
		-webkit-mask-image: -webkit-gradient(
			linear,
			center top,
			center bottom,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);
	}

	.grid-credits {
		grid-template-columns: 10rem 1fr;
	}
</style>
