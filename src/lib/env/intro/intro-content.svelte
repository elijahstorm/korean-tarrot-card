<script>
	import { viewSelectionState } from '$lib/utils/changeState'
	import { Lang } from '$lib/sources/lang'
	import { onMount } from 'svelte'

	let animate = true

	onMount(() => (animate = false))
</script>

<div class="h-full flex flex-col">
	<div class="flex flex-col flex-1 justify-center">
		<div class="grid fade-in">
			<h1
				class="col-start-1 row-start-1 text-center mb-4 text-5xl font-maruburi blur-sm opacity-70"
			>
				{Lang.title}
			</h1>

			<h1 class="col-start-1 row-start-1 text-center mb-4 text-5xl font-maruburi">
				{Lang.title}
			</h1>

			<div
				class="col-start-1 row-start-1 bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black pointer-events-none"
			/>
		</div>

		<p class="text-center opacity-60">{Lang.subtitle}</p>

		<p class="text-center opacity-60">{Lang.subtitle2}</p>
	</div>

	<button
		on:click={viewSelectionState}
		class="btn mx-auto text-xl border rounded-full px-8 py-2 text-white border-white opacity-70 transition-all hover:px-12 hover:bg-zinc-700 hover:opacity-100"
		type="button">{Lang.startButton}</button
	>
</div>

<style>
	@keyframes fade-in {
		0% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}

	.fade-in {
		animation: fade-in 1s ease-out;
	}
</style>
