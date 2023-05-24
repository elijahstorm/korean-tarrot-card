<script lang="ts">
	import { roadmapData } from './stores/state'

	export let left = 50
	export let top = 50

	export let id: number

	const select = () =>
		roadmapData.update((data) =>
			!data ? null : { ...data, seen: [...data.seen, id], currentTab: id }
		)

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
