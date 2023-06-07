<script lang="ts">
	import { Lang } from '$lib/sources/lang'
	import { viewEndState } from '$lib/utils/changeState'

	export let show = false
</script>

{#if show}
	<div class="fixed inset-0 bg-[#ffff0020] flex justify-center items-center">
		<div
			class="border rounded border-[#ffff0080] bg-[#ffff0020] flex flex-col gap-6 py-4 px-12"
		>
			<p>
				{Lang.customize.confirmPrompt}
			</p>

			<div class="flex gap-12">
				<button
					on:click={() => (show = false)}
					class="btn px-6 py-2 border-[#ffff0080] bg-[#ffff0040]"
					type="button"
				>
					{Lang.customize.noResponse}
				</button>

				<button
					on:click={viewEndState}
					class="btn px-6 py-2 border-[#ffff0080] bg-[#ffff0040]"
					type="button"
				>
					{Lang.customize.yesResponse}
				</button>
			</div>
		</div>
	</div>
{/if}
