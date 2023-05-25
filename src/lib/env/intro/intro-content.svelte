<script>
	import { viewCardsState } from '$lib/utils/changeState'
	import { Lang } from '$lib/sources/lang'
</script>

<div class="w-full h-full flex flex-col">
	<div class="flex flex-col flex-1 justify-center">
		<h1 class="text-center mb-4 text-5xl">{Lang.title}</h1>

		<p class="text-center text-xl">{Lang.subtitle}</p>
	</div>

	<button
		on:click={viewCardsState}
		class="btn mx-auto text-xl border rounded-full px-8 py-2 text-white border-white transition-colors hover:bg-white hover:text-black"
		type="button">{Lang.startButton}</button
	>
</div>
