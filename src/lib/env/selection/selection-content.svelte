<script lang="ts">
	import { allPredictions } from '$lib/sources/predictionData'
	import { predictionState } from '$lib/stores/state'
	import { viewCardsState } from '$lib/utils/changeState'

	const choose = (id: number) => () => {
		predictionState.set(id)
		viewCardsState()
	}
</script>

<div class="h-full flex gap-16 justify-between items-center max-w-7xl mx-auto sm:p-0">
	{#each allPredictions as prediction}
		<button on:click={choose(prediction.id)} class="space-y-20 group" type="button">
			<div class="grid">
				<h2
					class="col-start-1 row-start-1 text-center mb-4 text-5xl font-maruburi blur-sm transition-all opacity-0 group-hover:opacity-80 group-focus:opacity-80"
				>
					{prediction.title}
				</h2>

				<h2 class="col-start-1 row-start-1 text-center mb-4 text-5xl font-maruburi">
					{prediction.title}
				</h2>
			</div>

			<img src="cards/behind.png" alt={prediction.title} />
		</button>
	{/each}
</div>
