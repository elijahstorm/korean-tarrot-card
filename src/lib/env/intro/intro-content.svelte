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
		<div class="flex flex-col flex-1 justify-center">
			<div in:fly={{ y: 100, duration, delay: delay(1) }} class="grid">
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

			<div in:fly={{ y: 100, duration, delay: delay(2) }}>
				<p class="text-center opacity-60">
					{Lang.subtitle}
				</p>

				<p class="text-center opacity-60">{Lang.subtitle2}</p>
			</div>
		</div>

		<button
			on:click={viewSelectionState}
			in:scale={{ duration, delay: delay(3), opacity: 0 }}
			class="btn mx-auto text-xl border rounded-full px-8 py-2 text-white border-white opacity-70 transition-all hover:px-12 hover:bg-zinc-700 hover:opacity-100"
			type="button">{Lang.startButton}</button
		>
	</div>

	<!-- <img
		src="cards/behind.png"
		alt="intro animation"
		in:fly={{ duration, delay: delay(0) }}
		class="absolute inset-0"
	/> -->
{/if}
