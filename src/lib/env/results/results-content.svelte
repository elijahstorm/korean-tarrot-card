<script lang="ts">
	import { viewCardsState, viewCustomizeState } from '$lib/utils/changeState'
	import { Lang } from '$lib/sources/lang'
	import { fly } from 'svelte/transition'
	import { predictionState, selectedCardsState } from '$lib/stores/state'
	import { allPredictions } from '$lib/sources/predictionData'
	import { allItems } from '$lib/sources/itemData'

	const memoize = <A extends object, B>(func: (obj: A) => B): ((obj: A) => B) => {
		const memo = new WeakMap()

		return (obj: A): B => {
			if (!memo.has(obj)) {
				memo.set(obj, func(obj))
			}
			return memo.get(obj)
		}
	}

	const item = memoize(
		(card: Card): Item => allItems.find((item) => item.id === card.items[0]) ?? allItems[0]
	)
</script>

<div class="flex flex-col gap-8 h-full">
	<section class="flex-1 flex gap-8">
		<div class="flex gap-4" style="flex: 3">
			{#each $selectedCardsState as card, index (card.id)}
				<div
					in:fly={{ delay: (1 + index) * 400 }}
					class="flex-1 flex flex-col gap-4 justify-center"
				>
					<div>
						<h5 class="text-center font-maruburi">{card.title}</h5>

						<div
							class="mx-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
						/>
					</div>

					<img src={card.smallImage} alt={card.title} />
				</div>
			{/each}
		</div>

		<div class="flex flex-col gap-1 overflow-auto" style="flex: 2">
			<div class="px-4 py-2 rounded-lg bg-zinc-800 text-xl self-start">
				{allPredictions.find((p) => p.id === $predictionState)?.title}
				{Lang.results.predictionHeader}
			</div>

			<h3 class="text-xl py-3 font-maruburi">{Lang.results.header}</h3>

			<div class="relative flex-1 max-h-60 overflow-hidden">
				<p class="custom-scrollbar overflow-y-auto w-full pb-12 pr-2 max-h-60">
					{Lang.results.content}
				</p>

				<div
					class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black pointer-events-none"
				/>
			</div>

			<div class="flex flex-col px-6 py-4 border border-zinc-700 rounded-md mt-6 self-start">
				<h5 class="font-maruburi">{Lang.results.cardInfoHeader}</h5>

				<p>
					<span class="text-sm">
						{Lang.results.cardInfoHL}
					</span>

					<span class="text-zinc-400 text-xs">
						{Lang.results.cardInfoNormal}
					</span>
				</p>

				<div class="flex gap-2 py-4 overflow-x-auto custom-scrollbar">
					{#each $selectedCardsState as card (card.id)}
						<div class="flex flex-col gap-2">
							<div class="bg-zinc-700 rounded-md border border-zinc-600 p-2">
								<img
									src={item(card).image}
									alt={item(card).name}
									class="aspect-1 w-16"
								/>
							</div>

							<p class="text-center">
								<span class="text-zinc-400 text-xs">
									{item(card).info}
								</span>

								<span class="text-sm">
									{item(card).name}
								</span>
							</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="flex">
				<p
					class="h-5 w-5 pl-2 mr-1 rounded-full bg-zinc-700 text-white text-sm scale-75 font-maruburi rotate-12"
				>
					i
				</p>

				<p class="text-zinc-600 text-xs">
					{Lang.results.warningInfo}
				</p>
			</div>
		</div>
	</section>

	<div class="self-end space-x-4">
		<button
			on:click={viewCustomizeState}
			class="btn border bg-stone-700 text-white border-stone-400 hover:bg-stone-400"
			type="button"
		>
			{Lang.results.makeCardButton}
		</button>

		<button
			on:click={viewCardsState}
			class="btn border bg-stone-700 text-white border-stone-400 hover:bg-stone-400"
			type="button"
		>
			{Lang.results.nextButton}
		</button>
	</div>
</div>
