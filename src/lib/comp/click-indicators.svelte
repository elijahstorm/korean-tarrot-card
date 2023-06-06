<script lang="ts">
	import { indicators, roadmapData, showCardDisplay } from '$lib/stores/state'
	import Indicator from './indicator.svelte'
</script>

{#if $showCardDisplay}
	{#each $indicators as indicator}
		{#if !$roadmapData?.seenItems.includes(indicator.id)}
			<Indicator id={indicator.id} left={indicator.left} top={indicator.top} />
		{/if}
	{/each}
{/if}
