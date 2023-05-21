<script>
	import ClickIndicator from '$lib/comp/click-indicator.svelte'
	import Description from '$lib/comp/description.svelte'
	import Nav from '$lib/comp/nav.svelte'
	import Roadmap from '$lib/comp/roadmap.svelte'
	import TestScene from '$lib/env/test/test-scene.svelte'
	import World from '$lib/env/world.svelte'
</script>

<World>
	<TestScene />
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
	<ClickIndicator left="40" top="50" />
	<ClickIndicator left="50" top="20" />
	<ClickIndicator left="30" top="60" />
</section>
