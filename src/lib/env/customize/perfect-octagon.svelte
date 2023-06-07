<script lang="ts">
	import { fly } from 'svelte/transition'

	export let index = 0
	export let selected = false
	export let action: VoidFunction = () => {}
</script>

<div
	in:fly={{ y: 50, delay: (1 + index) * 100, duration: 200 }}
	class="octagon aspect-1 w-[6.6rem] transition hover:bg-gray-400"
	class:bg-gray-600={!selected}
	class:hover:bg-white={selected}
	class:bg-white={selected}
>
	<div class="octagon aspect-1 w-[6.4rem] bg-black">
		<button
			on:click={action}
			class="btn aspect-1 w-24 octagon p-0 mt-[0.2rem] radial-gradient overflow-clip"
			type="button"
		>
			<slot />
		</button>
	</div>
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
			rgb(19 19 21 / 25%),
			rgb(40 40 46 / 25%),
			rgb(95 95 99 / 25%),
			rgb(152 152 154 / 25%)
		);
	}
</style>
