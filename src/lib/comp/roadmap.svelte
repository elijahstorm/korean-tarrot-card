<script lang="ts">
	import { activateSceneState, roadmapData } from '$lib/stores/state'

	const changeCurrentTab = (id: number) => () => activateSceneState(id)
</script>

{#if $roadmapData !== null}
	<section class="grid grid-cols-1 grid-rows-1 text-white select-none">
		<div class="col-start-1 row-start-1 bg-black blur-xl opacity-60 pointer-events-none" />

		<div class="flex row-start-1 col-start-1 gap-2">
			<h4 class="pt-0.5">{$roadmapData.title}</h4>

			<div class="relative w-2 pt-3 h-[calc(100%-1.5rem)]">
				<div class="absolute h-full flex flex-col justify-between">
					<div class="bg-white rotate-45 w-2 aspect-1" />
					<div class="bg-white rotate-45 w-2 aspect-1" />
					<div class="bg-white rotate-45 w-2 aspect-1" />
				</div>

				<div class="absolute w-[0.1rem] ml-[0.21rem] h-full bg-white opacity-60" />
			</div>

			<div class="flex flex-col gap-4 text-sm py-0.5 -ml-3">
				{#each $roadmapData.points as point (point.id)}
					<button
						on:click={changeCurrentTab(point.id)}
						class="py-1 px-2 pl-3 bg-gradient-to-r text-left hover:from-stone-900 hover:via-stone-500 hover:to-stone-500"
						class:from-stone-900={$roadmapData.currentTab === point.id}
						class:to-stone-900={$roadmapData.currentTab === point.id}
						class:via-stone-500={$roadmapData.currentTab === point.id}
						type="button"
					>
						{point.name}
					</button>
				{/each}
			</div>
		</div>
	</section>
{/if}
