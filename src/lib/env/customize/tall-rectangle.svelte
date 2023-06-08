<script lang="ts">
	import { fly } from 'svelte/transition'

	export let color = ''
	export let horizontal = false
	export let index = 0
	export let selected = false
	export let action: VoidFunction = () => {}
</script>

<button
	in:fly={{ y: 50, delay: (1 + index) * 100, duration: 200 }}
	on:click={action}
	class="btn rounded overflow-clip ring-2 ring-offset-2 ring-offset-black focus:ring-[#FFECAA] mt-1 {color}"
	class:w-14={!horizontal}
	class:h-36={!horizontal}
	class:w-36={horizontal}
	class:h-14={horizontal}
	class:ring-gray-600={!selected}
	class:ring-white={selected}
	type="button"
/>
