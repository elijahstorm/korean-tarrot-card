<script lang="ts">
	import { viewSelectionState } from '$lib/utils/changeState'
	import { Lang } from '$lib/sources/lang'
	import { onMount } from 'svelte'
	import { fly, scale } from 'svelte/transition'

	const duration = 800

	let loaded = false

	onMount(() => (loaded = true))

	const delay = (index: number) => duration * (index + index * 0.1) + 300
</script>

{#if loaded}
	<div class="h-full flex flex-col">
		<div class="flex flex-col flex-1 justify-center gap-6">
			<div in:fly={{ y: 100, duration, delay: delay(1) }} class="grid intro-header">
				<h1
					class="col-start-1 row-start-1 text-center mb-4 text-6xl font-bold tracking-widest font-maruburi blur-sm opacity-70"
				>
					{Lang.title}
				</h1>

				<h1 class="col-start-1 row-start-1 text-center mb-4 text-6xl font-bold tracking-widest font-maruburi">
					{Lang.title}
				</h1>
			</div>

			<div class="text-sm space-y-3" in:fly={{ y: 100, duration, delay: delay(2) }}>
				<p class="text-center opacity-60">
					{Lang.subtitle}
				</p>

				<p class="text-center opacity-60">
					{Lang.subtitle2}
				</p>
			</div>
		</div>

		<button
			on:click={viewSelectionState}
			in:scale={{ duration, delay: delay(3), opacity: 0 }}
			class="btn mb-20 mx-auto text-xl bg-transparent border rounded-full px-8 py-2 text-white border-white opacity-70 transition-all duration-700 hover:px-12 hover:bg-[#fff3] hover:opacity-100"
			type="button"
		>
			{Lang.startButton}
		</button>
	</div>
{/if}

<style>
	.intro-header {
		mask-image: gradient(
			linear,
			center top,
			center bottom,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);
		-webkit-mask-image: -webkit-gradient(
			linear,
			center top,
			center bottom,
			from(rgba(0, 0, 0, 1)),
			to(rgba(0, 0, 0, 0))
		);
	}
</style>
