<script>
	import { viewCardsState } from '$lib/utils/changeState'
	import { Lang } from '$lib/sources/lang'
</script>

<div class="w-full h-full flex flex-col">
	<div class="flex flex-col flex-1 justify-center">
		<div class="grid">
			<h1
				class="col-start-1 row-start-1 text-center mb-4 text-5xl font-maruburi blur-sm opacity-70"
			>
				{Lang.title}
			</h1>

			<h1 class="col-start-1 row-start-1 text-center mb-4 text-5xl font-maruburi">
				{Lang.title}
			</h1>

			<div
				class="col-start-1 row-start-1 bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-black pointer-events-none"
			/>
		</div>

		<p class="text-center opacity-60">{Lang.subtitle}</p>
	</div>

	<button
		on:click={viewCardsState}
		class="btn mx-auto text-xl border rounded-full px-8 py-2 text-white border-white transition-colors opacity-70 hover:bg-white hover:text-black hover:opacity-100"
		type="button">{Lang.startButton}</button
	>
</div>
