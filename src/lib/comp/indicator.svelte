<script lang="ts">
	import { fly } from 'svelte/transition'
	import { activateSceneState } from '../stores/scenes'
	import { videoInMotion } from '$lib/stores/state'

	export let left = 50
	export let top = 50

	export let id: number

	const select = () => {
		videoInMotion.set(true)
		activateSceneState(id)
	}

	$: style = `left: ${left}%; top: ${top}%;`
</script>

<button
	on:click={select}
	in:fly={{ delay: 600 }}
	out:fly
	class="pointer-events-auto absolute w-min aspect-1 rounded-full overflow-clip p-6 opacity-60 border border-[#FFECAA99] bg-black text-white cursor-pointer hover:opacity-90 transition-opacity select-none"
	{style}
	type="button"
>
	click
</button>
