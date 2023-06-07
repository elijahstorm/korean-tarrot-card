<script lang="ts">
	import { base } from '$app/paths'
	import { Lang } from '$lib/sources/lang'
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
	<h1 class="text-center mb-4">{Lang.end.title}</h1>
{/if}
