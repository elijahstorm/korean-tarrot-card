<script>
	import { viewCardsState, viewCustomizeState } from '$lib/utils/changeState'
	import { Lang } from '$lib/sources/lang'

	const cards = [
		{
			id: 0,
			title: '과거',
			info: '은둔자',
			image: '',
			item: {
				info: '별',
				name: '달님',
			},
		},
		{
			id: 1,
			title: '과거',
			info: '은둔자',
			image: '',
			item: {
				info: '별',
				name: '달님',
			},
		},
		{
			id: 2,
			title: '과거',
			info: '은둔자',
			image: '',
			item: {
				info: '별',
				name: '달님',
			},
		},
	]
</script>

<div class="flex flex-col gap-8 h-full">
	<section class="flex-1 flex gap-8">
		<div class="flex gap-4" style="flex: 3">
			{#each cards as card (card.id)}
				<div class="flex-1 flex flex-col gap-4 justify-center">
					<div>
						<h5 class="text-center">{card.title}</h5>

						<div
							class="mx-8 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
						/>
					</div>

					<div class="card bg-blue-500 overflow-clip">
						<img src={card.image} alt={card.title} />

						<h6>{card.info}</h6>
					</div>
				</div>
			{/each}
		</div>

		<div class="flex flex-col gap-1 overflow-auto" style="flex: 2">
			<button class="btn bg-zinc-700 px-4">{Lang.results.headerButton}</button>

			<h3 class="text-xl py-3">{Lang.results.header}</h3>

			<div class="relative flex-1 max-h-60 overflow-hidden">
				<p class="custom-scrollbar overflow-y-auto w-full pb-12 pr-2 max-h-60">
					{Lang.results.content}
				</p>

				<div
					class="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black pointer-events-none"
				/>
			</div>

			<div class="flex flex-col px-6 py-4 border border-zinc-700 rounded-md max-w-min mt-6">
				<h5>{Lang.results.cardInfoHeader}</h5>

				<p>
					<span class="text-sm">
						{Lang.results.cardInfoHL}
					</span>

					<span class="text-zinc-400 text-xs">
						{Lang.results.cardInfoNormal}
					</span>
				</p>

				<div class="flex gap-2 py-4 overflow-x-auto custom-scrollbar">
					{#each cards as card (card.id)}
						<div class="flex flex-col gap-2">
							<div class="bg-zinc-700 rounded-md border border-zinc-400 p-2">
								<img src="hey" alt="img" class="aspect-1 w-16" />
							</div>

							<p class="text-center">
								<span class="text-zinc-400 text-xs">
									{card.item.info}
								</span>

								<span class="text-sm">
									{card.item.name}
								</span>
							</p>
						</div>
					{/each}
				</div>
			</div>

			<p class="text-zinc-600 text-xs">
				{Lang.results.warningInfo}
			</p>
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
