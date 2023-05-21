<script lang="ts">
	import { viewSceneState } from '$lib/changeState'
	import { onMount } from 'svelte'
	import { flip } from 'svelte/animate'
	import { quintOut } from 'svelte/easing'
	import { crossfade } from 'svelte/transition'

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node)
			const transform = style.transform === 'none' ? '' : style.transform

			return {
				duration: 600,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`,
			}
		},
	})

	type Card = {
		id: number
		angle: number
	}

	const angleChange = 1.7
	const cardAmount = 22

	let cards = new Array<Card>()
	let slots = new Array<Card>()

	onMount(() => {
		for (let index = 0; index < cardAmount; index++) {
			cards.push({
				id: index,
				angle: 0,
			})
		}

		reflow()
	})

	const select = (id: number) => () => {
		if (slots.length >= 3) return

		const card = cards.find((card) => card.id === id)
		if (!card) return

		cards = cards.filter((card) => card.id !== id)
		slots = [...slots, card]
		if (slots.length >= 3) {
			// todo: save data for next scenes
			cards = []
			slots = []
			viewSceneState()
			return
		}

		reflow()
	}

	const reflow = () => {
		for (let index = 0; index < cards.length; index++) {
			cards[index].angle = (3 * cards[index].id - cardAmount * 1.5) * angleChange
		}
	}
</script>

<div class="flex flex-col">
	<div class="flex-1 grid grid-cols-2">
		<div class="col-span-3 grid justify-center">
			{#each cards as card (card.id)}
				<button
					on:click={select(card.id)}
					out:send={{ key: card.id }}
					animate:flip
					class="card col-start-1 row-start-1 bg-blue-500 border border-black transition-colors hover:bg-blue-300"
					style="transform-origin: center 300px; rotate: {card.angle}deg; translate: 0 -70px; z-index: {card.id}"
					type="button"
				/>
			{/each}
		</div>

		<div class="col-span-3 grid grid-cols-3 gap-2 h-[94px]">
			{#each slots as card (card.id)}
				<div class="card bg-blue-500 border border-black" />
			{/each}
		</div>
	</div>
</div>

<style>
	.card {
		width: 58px;
		height: 94px;
		border-radius: 0.25rem;
	}
</style>
