<script lang="ts">
	import { viewSceneState } from '$lib/changeState'
	import { onMount } from 'svelte'
	import { flip } from 'svelte/animate'
	import { quintOut } from 'svelte/easing'
	import { crossfade, fly } from 'svelte/transition'

	type Card = {
		id: number
		selected: boolean
	}

	const angleChange = 2.5
	const cardAmount = 22
	const duration = 800

	let innerWidth: number
	let cards = new Array<Card>()
	let slots = new Array<Card>()

	onMount(() => {
		for (let index = 0; index < cardAmount; index++) {
			cards.push({
				id: index,
				selected: false,
			})
		}

		cards = cards
	})

	const [send, receive] = crossfade({
		duration,
		fallback(node, params) {
			const style = getComputedStyle(node)
			const transform = style.transform === 'none' ? '' : style.transform

			return {
				duration,
				easing: quintOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t};
				`,
			}
		},
	})

	const select = (id: number) => () => {
		if (slots.length >= 3) return

		const card = cards.find((card) => card.id === id)
		if (!card) return

		card.selected = true
		cards = cards.filter((card) => card.id !== id)
		slots = [...slots, card]
		if (slots.length >= 3) {
			setTimeout(() => (cards = slots = []), duration * 3)
			setTimeout(() => viewSceneState(), duration * 4)
			return
		}
	}

	const angle = (id: number) => ((Math.PI / 1.5) * id - cardAmount) * angleChange
</script>

<svelte:window bind:innerWidth />

<div class="flex flex-col">
	<div class="flex-1 flex flex-col">
		<div class="responsive col-span-3 grid justify-center">
			{#if cards.length === 0}
				<div class="col-start-1 row-start-1 invisible" />
			{:else}
				{#each cards as card, index (card.id)}
					<div
						in:receive={{ key: card.id, duration }}
						out:send={{ key: card.id, duration }}
						animate:flip
						class="card responsive col-start-1 row-start-1"
					>
						{#if slots.length < 3}
							<button
								on:click={select(card.id)}
								in:fly={{ delay: index * 30, y: -200 }}
								out:fly={{ delay: index * 30 + duration, y: -200 }}
								type="button"
								class="relative top-[-70px] card responsive bg-blue-500 border border-black transition-all hover:bg-blue-300"
								style="transform-origin: center {innerWidth / 4}px; rotate: {angle(
									card.id
								)}deg; z-index: {card.selected ? cardAmount : card.id}"
							/>
						{/if}
					</div>
				{/each}
			{/if}
		</div>

		<div class="responsive col-span-3 grid grid-cols-3 gap-2">
			{#if slots.length === 0}
				<div class="card responsive invisible" />
			{:else}
				{#each slots as card (card.id)}
					<div
						in:receive={{ key: card.id, duration, delay: duration / 2 }}
						out:send={{ key: card.id, duration }}
						class="card responsive bg-blue-500 border border-black"
					/>
				{/each}
			{/if}
		</div>
	</div>
</div>

<style>
	.responsive {
		height: 20vh;
		max-height: 120px;
	}
</style>
