<script lang="ts">
	import { base } from '$app/paths'
	import { Lang } from '$lib/sources/lang'
	import { selectedCardsState, showCardDisplay, viewState } from '$lib/stores/state'
	import { viewSceneState } from '$lib/utils/changeState'
	import { pipe } from '$lib/utils/fp-ts'
	import { afterUpdate, onMount } from 'svelte'
	import { get } from 'svelte/store'
	import { fade, fly } from 'svelte/transition'

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
			if (get(viewState) !== 'cards') return

			slots.map((card) => (card.animating = false))
			cards = cards.filter((card) => !card.selected)
			slots = slots
		}, 0)
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
			setTimeout(() => pipe(showCardDisplay.set(true), () => viewSceneState()), duration * 6)
			return
		}
	}

	const getDuration = (params: { delay?: number; duration?: number }) => ({
		delay: get(viewState) === 'cards' ? params.delay : 0,
		duration: get(viewState) === 'cards' ? params.duration : 0,
	})

	const angle = (id: number) => ((Math.PI / 1.5) * id - cardAmount) * angleChange

	const cardRotation = (card: Card) =>
		`transform-origin: center ${innerWidth / 3}px; rotate: ${angle(card.id)}deg; z-index: ${
			card.id
		}`
</script>

<svelte:window bind:innerWidth />

<svelte:head>
	{#each $selectedCardsState as card}
		<link rel="preload" as="image" href="cards/{card.fileName}.png" />
		<link rel="preload" as="image" href="cards/small/{card.fileName}.png" />
		<link rel="preload" as="image" href="scenes/bgs/{card.fileName}.png" />
	{/each}
</svelte:head>

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
								out:fly={{
									...getDuration({ delay: index * 30 + duration }),
									y: -200,
								}}
								type="button"
								class="card responsive transition-all"
								class:hidden={card.selected}
								style={cardRotation(card)}
							>
								<img src="{base}/cards/behind.png" alt="card background" />
							</button>
						{/if}
					</div>
				{/each}
			{/if}
		</div>

		<div
			class="responsive self-center col-span-3 grid grid-cols-1 mt-14 pt-16 transition-all duration-700"
			style={zoom ? 'scale: 2.5' : ''}
		>
			{#if slots.length === 0}
				<div class="card responsive invisible" />
			{:else}
				{#each slots as card, index (card.id)}
					<div
						class="card responsive col-start-1 row-start-1 grid transition-all"
						out:fly={{
							...getDuration({
								duration: duration / 2,
								delay: (index * duration) / 4,
							}),
							y: 40,
						}}
						style="transition-duration: {duration}ms; {card.animating
							? 'translate: 0 calc(max(-20vh, -120px) - 7.5rem); ' +
							  cardRotation(card)
							: `translate: calc(${index} * (min(20vh, 120px) * (0.617 + 0.25)) - min(20vh, 120px)) 0`}"
					>
						<img
							class="col-start-1 row-start-1 transition-all"
							class:scale-x-0={revealCards}
							class:scale-x-100={!revealCards}
							src="{base}/cards/behind.png"
							alt="card background"
							style="transition-duration: {duration /
								4}ms; transition-delay: {(index * duration) / 4}ms"
						/>

						<img
							class="col-start-1 row-start-1 transition-all"
							class:scale-x-100={revealCards}
							class:scale-x-0={!revealCards}
							src={base +
								'/' +
								`cards/${zoom ? '' : 'small/'}${
									$selectedCardsState[index].fileName
								}.png`}
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

		{#if !zoom}
			<div
				class="grid self-center -mt-24 pt-2"
				out:fade={{ ...getDuration({ duration: duration / 2 }) }}
			>
				{#each Lang.timelineNames as name, index (name)}
					<div
						class="flex flex-col col-start-1 row-start-1 space-y-2 items-center"
						style="translate: calc({index} * (min(20vh, 120px) * (0.617 + 0.25)) - min(20vh, 120px)) 0"
					>
						<p class="font-maruburi">
							{name}
						</p>

						{#if !slots[index]}
							<div
								class="card responsive border-2 border-dashed border-zinc-600"
								out:fade={{ ...getDuration({ duration: duration / 3 }) }}
							/>
						{/if}
					</div>
				{/each}
			</div>
		{/if}
	</div>
</div>

<style>
	.responsive {
		height: 20vh;
		max-height: 120px;
	}
</style>
