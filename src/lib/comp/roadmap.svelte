<script lang="ts">
	import { Lang } from '$lib/sources/lang'
	import { changeScene } from '$lib/stores/scenes'
	import {
		currentDisplayedScene,
		roadmapData,
		selectedCardsState,
		showCardDisplay,
	} from '$lib/stores/state'
	import { pipe } from '$lib/utils/fp-ts'

	const changeCurrentTab = (id: number) => () =>
		pipe(showCardDisplay.set(true), () => changeScene(id))
</script>

{#if $roadmapData !== null}
	<section class="grid grid-cols-1 grid-rows-1 text-white select-none">
		<div
			class="col-start-1 row-start-1 bg-black blur-xl opacity-40 pointer-events-none mix-blend-multiply"
		/>

		<div class="flex row-start-1 col-start-1 gap-2">
			<h4 class="pt-0.5 font-maruburi">{$roadmapData.title}</h4>

			<div class="relative w-2 pt-3 h-[calc(100%-1.5rem)] z-10">
				<div class="absolute h-full flex flex-col justify-between">
					<div class="bg-white rotate-45 w-2 aspect-1" />
					<div class="bg-white rotate-45 w-2 aspect-1" />
					<div class="bg-white rotate-45 w-2 aspect-1" />
				</div>

				<div class="absolute w-[0.1rem] ml-[0.21rem] h-full bg-white opacity-60" />
			</div>

			<div class="flex flex-col gap-4 text-sm py-0.5 -ml-3 opacity-70">
				{#each $selectedCardsState as card, index (card.id)}
					<div class="grid group">
						<div
							class="col-start-1 row-start-1 blur-[6px] bg-gradient-to-r from-transparent via-[#FFF7DCB0] to-transparent opacity-0 transition-opacity"
							class:opacity-100={card.id === $currentDisplayedScene}
						/>

						<div
							class="col-start-1 row-start-1 blur-[6px] bg-gradient-to-r from-transparent via-[#FFF7DC70] to-[#FFF7DCB0] transition-opacity opacity-0 group-hover:opacity-90"
						/>

						<button
							on:click={changeCurrentTab(card.id)}
							class="col-start-1 row-start-1 text-left py-1 px-2 pl-3 z-10"
							type="button"
						>
							{Lang.timelineNames[index]} - {card.title}
						</button>
					</div>
				{/each}
			</div>
		</div>
	</section>
{/if}
