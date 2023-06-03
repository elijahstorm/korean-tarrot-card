<script lang="ts">
	import { allPredictions } from '$lib/sources/predictionData'
	import { predictionState } from '$lib/stores/state'
	import { videoState } from '$lib/stores/video-state'
	import { viewCardsState } from '$lib/utils/changeState'

	const choose = (id: number) => () => {
		predictionState.set(id)
		viewCardsState()
	}

	const hover = (prediction: Prediction) => () => videoState.set(`${prediction.id}`)
</script>

<div class="h-full grid grid-cols-2 gap-16 max-w-7xl mx-auto py-12 px-8 sm:px-16 lg:grid-cols-4">
	{#each allPredictions as prediction}
		<button
			on:click={choose(prediction.id)}
			class="space-y-4 group max-w-[6rem] mx-auto lg:space-y-20 lg:max-w-[12rem]"
			type="button"
			on:mouseenter={hover(prediction)}
		>
			<div class="grid text-center mb-4 text-2xl font-maruburi sm:text-3xl lg:text-5xl">
				<h2
					class="col-start-1 row-start-1 blur-md transition-all opacity-0 group-hover:opacity-80 group-focus:opacity-80"
				>
					{prediction.title}
				</h2>

				<h2 class="col-start-1 row-start-1">
					{prediction.title}
				</h2>
			</div>

			<div class="h-1/2" />
			<!-- <img src="cards/behind.png" alt={prediction.title} /> -->
		</button>
	{/each}
</div>
