<script>
	import ClickIndicators from '$lib/comp/click-indicators.svelte'
	import Description from '$lib/comp/description.svelte'
	import Nav from '$lib/comp/nav.svelte'
	import Roadmap from '$lib/comp/roadmap.svelte'
	import IntroScene from '$lib/env/intro/intro-scene.svelte'
	import EndScene from '$lib/env/end/end-scene.svelte'
	import TestScene from '$lib/env/test/test-scene.svelte'
	import World from '$lib/env/world.svelte'
	import { viewState } from '$lib/state'
	import CardsScene from '$lib/env/cards/cards-scene.svelte'
	import ResultsScene from '$lib/env/results/results-scene.svelte'
	import CustomizeScene from '$lib/env/customize/customize-scene.svelte'
	import IntroContent from '$lib/env/intro/intro-content.svelte'
	import EndContent from '$lib/env/end/end-content.svelte'
	import TestContent from '$lib/env/test/test-content.svelte'
	import CardsContent from '$lib/env/cards/cards-content.svelte'
	import ResultsContent from '$lib/env/results/results-content.svelte'
	import CustomizeContent from '$lib/env/customize/customize-content.svelte'
	import { onMount } from 'svelte'
	import { viewIntroState } from '$lib/changeState'

	onMount(() => viewIntroState())
</script>

<World>
	{#if $viewState === 'intro'}
		<IntroScene />
	{:else if $viewState === 'cards'}
		<CardsScene />
	{:else if $viewState === 'scene'}
		<TestScene />
	{:else if $viewState === 'results'}
		<ResultsScene />
	{:else if $viewState === 'customize'}
		<CustomizeScene />
	{:else if $viewState === 'end'}
		<EndScene />
	{/if}
</World>

<section class="my-8 mx-4 sm:mx-8 grid grid-rows-layout absolute inset-0">
	<header class="justify-self-start">
		<Nav />
	</header>

	<section class="justify-self-end">
		<Roadmap />
	</section>

	<main class="col-span-2 flex-grow justify-self-center self-center">
		{#if $viewState === 'intro'}
			<IntroContent />
		{:else if $viewState === 'cards'}
			<CardsContent />
		{:else if $viewState === 'scene'}
			<TestContent />
		{:else if $viewState === 'results'}
			<ResultsContent />
		{:else if $viewState === 'customize'}
			<CustomizeContent />
		{:else if $viewState === 'end'}
			<EndContent />
		{/if}
	</main>

	<footer class="col-span-2 justify-self-center self-end">
		<Description />
	</footer>
</section>

<section class="absolute inset-0 pointer-events-none">
	<ClickIndicators />
</section>
