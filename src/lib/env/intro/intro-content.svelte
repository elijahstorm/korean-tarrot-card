<script>
	import { viewCardsState } from '$lib/changeState'
	import { Lang } from '$lib/lang'
</script>

<h1 class="text-center mb-4">{Lang.title}</h1>

<p class="text-center">{Lang.subtitle}</p>

<button
	on:click={viewCardsState}
	class="btn absolute mx-auto bottom-3 border rounded-full px-8 py-2 text-white border-white transition-colors hover:bg-white hover:text-black"
	type="button">{Lang.startButton}</button
>
