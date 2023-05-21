<script>
	import ClickIndicators from '$lib/comp/click-indicators.svelte'
	import Description from '$lib/comp/description.svelte'
	import Nav from '$lib/comp/nav.svelte'
	import Roadmap from '$lib/comp/roadmap.svelte'
	import Intro from '$lib/env/intro/intro.svelte'
	import Results from '$lib/env/results/results.svelte'
	import End from '$lib/env/end/end.svelte'
	import Cards from '$lib/env/cards/cards.svelte'
	import Customize from '$lib/env/customize/customize.svelte'
	import TestScene from '$lib/env/test/test-scene.svelte'
	import World from '$lib/env/world.svelte'
	import { viewState } from '$lib/state'
</script>

<World>
	{#if $viewState === 'intro'}
		<Intro />
	{:else if $viewState === 'end'}
		<End />
	{:else if $viewState === 'scene'}
		<TestScene />
	{:else if $viewState === 'cards'}
		<Cards />
	{:else if $viewState === 'results'}
		<Results />
	{:else if $viewState === 'customize'}
		<Customize />
	{/if}
</World>

<section class="my-8 mx-4 sm:mx-8 grid grid-cols-2 grid-rows-2 absolute inset-0">
	<div class="justify-self-start">
		<Nav />
	</div>

	<div class="justify-self-end">
		<Roadmap />
	</div>

	<div class="col-span-2 justify-self-center self-end">
		<Description />
	</div>
</section>

<section class="absolute inset-0">
	<ClickIndicators />
</section>
