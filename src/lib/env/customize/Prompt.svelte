<script lang="ts">
	import { Lang } from '$lib/sources/lang'
	import { viewEndState } from '$lib/utils/changeState'
	import { showEndPrompt } from './customize'

	const exit = () => {
		showEndPrompt.set(false)
		viewEndState()
	}
</script>

{#if $showEndPrompt}
	<div class="fixed inset-0 flex bg-[#FFECAA20] justify-center items-center">
		<div class="border rounded border-[#FFECAA80] bg-yellow-900 flex flex-col gap-6 py-4 px-12">
			<p class="text-lg font-semibold">
				{Lang.customize.confirmPrompt}
			</p>

			<div class="flex gap-12">
				<button
					on:click={() => ($showEndPrompt = false)}
					class="px-6 py-2 border border-[#FFECAA] rounded-md hover:bg-[#FFECAA40]"
					type="button"
				>
					{Lang.customize.noResponse}
				</button>

				<button
					on:click={exit}
					class="px-6 py-2 border border-[#FFECAA] rounded-md hover:bg-[#FFECAA40]"
					type="button"
				>
					{Lang.customize.yesResponse}
				</button>
			</div>
		</div>
	</div>
{/if}
