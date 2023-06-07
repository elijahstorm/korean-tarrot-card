<script lang="ts">
	import { fly } from 'svelte/transition'

	export let size = 6.6
	export let index = 0
	export let selected = false
	export let action: VoidFunction = () => {}
</script>

<div
	in:fly={{ y: 50, delay: (1 + index) * 100, duration: 200 }}
	class="relative group octagon aspect-1 overflow-clip w-[{size}}rem]"
>
	<div
		class="absolute w-full h-full radial-gradient border-shadow opacity-10 transition-opacity group-hover:opacity-30"
	/>

	<button
		on:click={action}
		class="relative btn aspect-1 mt-[0.2rem] ring-transparent ring-offset-transparent"
		type="button"
	>
		<slot />
	</button>

	<div
		class="absolute octagon-border w-[calc(100%-2px)] h-[calc(100%-2px)] pointer-events-none overflow-clip transition-opacity opacity-0 group-hover:opacity-100 group-focus:opacity-100"
		class:opacity-100={selected}
	/>
</div>

<style>
	.octagon {
		clip-path: polygon(30% 0, 70% 0, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0 70%, 0 30%);
		display: flex;
		justify-content: center;
		align-items: center;
		border: none;
	}

	.radial-gradient {
		background: radial-gradient(
			circle,
			rgb(19 19 21),
			rgb(40 40 46),
			rgb(100 100 110),
			rgb(147 147 154)
		);
	}

	.octagon-border {
		background: transparent;
		top: 2px;
		border: 2px solid rgb(120 120 127);
		transform: rotate(45deg);
	}

	.octagon-border:before {
		content: '';
		display: block;
		position: absolute;
		top: -4px;
		left: -4px;
		width: calc(100% + 6px);
		height: calc(100% + 7px);
		border: inherit;
		transform: rotate(-45deg);
	}
</style>
