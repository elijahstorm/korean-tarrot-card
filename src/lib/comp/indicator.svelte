<script lang="ts">
	import { activateSceneState } from '../stores/scenes'

	export let left = 50
	export let top = 50

	export let id: number

	const select = () => activateSceneState(id)

	$: style = `left: ${left}%; top: ${top}%;`
</script>

<button
	on:click={select}
	class="pointer-events-auto absolute w-min aspect-1 rounded-full overflow-clip p-6 opacity-40 bg-black text-white cursor-pointer hover:opacity-80 transition-opacity select-none"
	{style}
	type="button"
>
	click
</button>
