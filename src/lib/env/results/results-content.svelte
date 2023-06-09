<script lang="ts">
	import { viewCardsState, viewCustomizeState } from '$lib/utils/changeState'
	import { Lang } from '$lib/sources/lang'
	import { fly } from 'svelte/transition'
	import { predictionState, selectedCardsState } from '$lib/stores/state'
	import { allPredictions } from '$lib/sources/predictionData'
	import { allItems } from '$lib/sources/itemData'
	import { base } from '$app/paths'
	import { memoize } from '$lib/utils/utils'

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
						<h5 class="text-center font-maruburi">{Lang.timelineNames[index]}</h5>

						<div
							class="mx-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
						/>
					</div>

					<img src={base + '/' + `cards/small/${card.fileName}.png`} alt={card.title} />
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

			<div class="flex flex-col px-6 py-4 border border-[#FFECAA] rounded-md mt-6 self-start">
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
									src={base + '/' + `items/${item(card).fileName}.png`}
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
					class="min-h-[19.5px] min-w-[19.5px] h-[19.5px] w-[19.5px] pl-2 mr-1 rounded-full select-none bg-zinc-700 text-white text-sm scale-75 font-maruburi rotate-12"
				>
					i
				</p>

				<p class="text-zinc-600 text-xs pt-0.5">
					{Lang.results.warningInfo}
				</p>
			</div>
		</div>
	</section>

	<div class="self-end space-x-4">
		<button
			on:click={viewCustomizeState}
			class="px-6 py-2 border border-[#FFECAA] rounded-md hover:bg-[#FFECAA40]"
			type="button"
		>
			{Lang.results.makeCardButton}
		</button>

		<button
			on:click={viewCardsState}
			class="px-6 py-2 border border-[#FFECAA] rounded-md hover:bg-[#FFECAA40]"
			type="button"
		>
			{Lang.results.nextButton}
		</button>
	</div>
</div>
