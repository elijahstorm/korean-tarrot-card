<script lang="ts">
	import { selectedCardsState } from '$lib/stores/state'
	import { viewSceneState } from '$lib/utils/changeState'
	import { afterUpdate, onMount } from 'svelte'
	import { fly } from 'svelte/transition'

	type Card = {
		id: number
		selected: boolean
		animating: boolean
	}

	const angleChange = 2.5
	const cardAmount = 22
	const duration = 800

	let innerWidth: number
	let cards = new Array<Card>()
	let slots = new Array<Card>()
	let revealCards = false
	let zoom = false

	onMount(() => {
		for (let index = 0; index < cardAmount; index++) {
			cards.push({
				id: index,
				selected: false,
				animating: false,
			})
		}

		cards = cards
	})

	afterUpdate(() => {
		setTimeout(() => {
			slots.map((card) => (card.animating = false))
			cards = cards.filter((card) => !card.selected)
			slots = slots
		}, 1)
	})

	const select = (id: number) => () => {
		if (slots.length >= 3) return

		const card = cards.find((card) => card.id === id)
		if (!card) return

		card.selected = true
		card.animating = true
		cards = cards
		slots = [...slots, card]
		if (slots.length >= 3) {
			setTimeout(() => (revealCards = true), duration * 2)
			setTimeout(() => (zoom = true), duration * 3)
			setTimeout(() => (cards = slots = []), duration * 5)
			setTimeout(() => viewSceneState(), duration * 6)
			return
		}
	}

	const angle = (id: number) => ((Math.PI / 1.5) * id - cardAmount) * angleChange
	const cardRotation = (card: Card) =>
		`transform-origin: center ${innerWidth / 3}px; rotate: ${angle(card.id)}deg; z-index: ${
			card.id
		}`
</script>

<svelte:window bind:innerWidth />

<div class="flex flex-col">
	<div class="flex-1 flex flex-col py-8">
		<div class="responsive col-span-3 grid justify-center">
			{#if cards.length === 0}
				<div class="col-start-1 row-start-1 invisible" />
			{:else}
				{#each cards as card, index (card.id)}
					<div class="card responsive col-start-1 row-start-1">
						{#if slots.length < 3}
							<button
								on:click={select(card.id)}
								in:fly={{ delay: index * 30, y: -200 }}
								out:fly={{ delay: index * 30 + duration, y: -200 }}
								type="button"
								class="card responsive border border-black transition-all"
								class:hidden={card.selected}
								style={cardRotation(card)}
							>
								<img src="cards/behind.png" alt="card background" />
							</button>
						{/if}
					</div>
				{/each}
			{/if}
		</div>

		<div
			class="responsive self-center col-span-3 grid grid-cols-1 gap-2 pt-16 transition-all duration-700"
			style={zoom ? 'scale: 2.5' : ''}
		>
			{#if slots.length === 0}
				<div class="card responsive invisible" />
			{:else}
				{#each slots as card, index (card.id)}
					<div
						class="card responsive col-start-1 row-start-1 grid border border-black transition-all"
						out:fly={{
							duration: duration / 2,
							delay: (index * duration) / 4,
							y: 40,
						}}
						style="transition-duration: {duration}ms; {card.animating
							? 'translate: 0 calc(max(-20vh, -120px) - 4rem); ' + cardRotation(card)
							: `translate: calc(${index} * (min(20vh, 120px) * (0.617 + 0.25)) - min(20vh, 120px)) 0`}"
					>
						<img
							class="col-start-1 row-start-1 transition-all"
							class:scale-x-0={revealCards}
							class:scale-x-100={!revealCards}
							src="cards/behind.png"
							alt="card background"
							style="transition-duration: {duration /
								4}ms; transition-delay: {(index * duration) / 4}ms"
						/>

						<img
							class="col-start-1 row-start-1 transition-all dur"
							class:scale-x-100={revealCards}
							class:scale-x-0={!revealCards}
							src={$selectedCardsState[index].image}
							alt={$selectedCardsState[index].title}
							style="transition-duration: {duration / 4}ms; transition-delay: {((1 +
								index) *
								duration) /
								4}ms"
						/>
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

<div class="hidden">
	{#each $selectedCardsState as card}
		<img src={card.image} alt={card.title} />
	{/each}
</div>

<style>
	.responsive {
		height: 20vh;
		max-height: 120px;
	}
</style>
