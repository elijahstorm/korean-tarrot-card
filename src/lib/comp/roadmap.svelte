<script>
	import { roadmapData } from '$lib/comp/stores/state'
</script>

{#if $roadmapData !== null}
	<div class="grid grid-cols-1 grid-rows-1 text-white">
		<section class="flex row-start-1 col-start-1 gap-2">
			<div>{$roadmapData.title}</div>

			<div class="relative w-2 pt-2 h-[calc(100%-1rem)]">
				<div class="absolute h-full flex flex-col justify-between">
					<div class="bg-white rotate-45 w-2 aspect-1" />
					<div class="bg-white rotate-45 w-2 aspect-1" />
					<div class="bg-white rotate-45 w-2 aspect-1" />
				</div>

				<div class="absolute w-[0.1rem] ml-[0.21rem] h-full bg-white opacity-60" />
			</div>

			<div class="flex flex-col gap-6 text-sm py-0.5">
				<div>{$roadmapData.points[0]}</div>

				<div>{$roadmapData.points[1]}</div>

				<div>{$roadmapData.points[2]}</div>
			</div>
		</section>

		<div class="col-start-1 row-start-1 bg-white blur-xl opacity-60" />
	</div>
{/if}
