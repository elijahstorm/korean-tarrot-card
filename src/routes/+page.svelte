<script>
	import ClickIndicators from '$lib/comp/click-indicators.svelte'
	import Description from '$lib/comp/description.svelte'
	import Nav from '$lib/comp/nav.svelte'
	import Roadmap from '$lib/comp/roadmap.svelte'
	import IntroScene from '$lib/env/intro/intro-scene.svelte'
	import EndScene from '$lib/env/end/end-scene.svelte'
	import PredictionScene from '$lib/env/prediction/prediction-scene.svelte'
	import World from '$lib/env/world.svelte'
	import { viewState } from '$lib/stores/state'
	import CardsScene from '$lib/env/cards/cards-scene.svelte'
	import ResultsScene from '$lib/env/results/results-scene.svelte'
	import CustomizeScene from '$lib/env/customize/customize-scene.svelte'
	import IntroContent from '$lib/env/intro/intro-content.svelte'
	import EndContent from '$lib/env/end/end-content.svelte'
	import PredictionContent from '$lib/env/prediction/prediction-content.svelte'
	import CardsContent from '$lib/env/cards/cards-content.svelte'
	import ResultsContent from '$lib/env/results/results-content.svelte'
	import CustomizeContent from '$lib/env/customize/customize-content.svelte'
	import { onMount } from 'svelte'
	import { viewIntroState } from '$lib/utils/changeState'
	import PopupModal from '$lib/comp/popup-modal.svelte'
	import SelectionScene from '$lib/env/selection/selection-scene.svelte'
	import SelectionContent from '$lib/env/selection/selection-content.svelte'

	const viewComponents = [
		{ state: 'intro', component: IntroContent, scene: IntroScene },
		{ state: 'selection', component: SelectionContent, scene: SelectionScene },
		{ state: 'cards', component: CardsContent, scene: CardsScene },
		{ state: 'scene', component: PredictionContent, scene: PredictionScene },
		{ state: 'results', component: ResultsContent, scene: ResultsScene },
		{ state: 'customize', component: CustomizeContent, scene: CustomizeScene },
		{ state: 'end', component: EndContent, scene: EndScene },
	]

	onMount(() => viewIntroState())
</script>

<World>
	{#each viewComponents as { state, scene }}
		{#if $viewState === state}
			{#key state}
				<svelte:component this={scene} />
			{/key}
		{/if}
	{/each}
</World>

<section
	class="py-8 px-4 sm:px-8 grid grid-rows-layout absolute inset-0 overflow-hidden"
	class:bg-black={true}
>
	<header class="justify-self-start">
		<Nav />
	</header>

	<section class="justify-self-end">
		<Roadmap />
	</section>

	<main class="col-span-2 justify-self-center self-center w-full h-full text-white">
		{#each viewComponents as { state, component }}
			{#if $viewState === state}
				{#key state}
					<svelte:component this={component} />
				{/key}
			{/if}
		{/each}
	</main>

	<footer class="col-span-2 justify-self-center self-end">
		<Description />
	</footer>
</section>

<section class="absolute inset-0 pointer-events-none">
	<ClickIndicators />

	<PopupModal />
</section>
