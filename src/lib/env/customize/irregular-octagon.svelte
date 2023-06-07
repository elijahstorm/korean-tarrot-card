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
	class:selected
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
		class="absolute octagon-border w-[calc(100%-2px)] h-[calc(100%-2px)] pointer-events-none overflow-clip transition-opacity opacity-0 group-hover:opacity-0 group-focus:opacity-0"
	/>
</div>

<style>
	.octagon {
		clip-path: polygon(20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 20%);
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

	.selected {
		--tw-drop-shadow: drop-shadow(0 10px 8px rgb(190 200 222 / 75%))
			drop-shadow(0 4px 3px rgb(155 166 125 / 0%));
		filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale)
			var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia)
			var(--tw-drop-shadow);
	}

	.octagon-border {
		background: transparent;
		top: 2px;
		border: 2px solid rgb(120 120 127);
		clip-path: polygon(20% 0, 80% 0, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0 80%, 0 20%);
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
