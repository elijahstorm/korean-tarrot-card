<script lang="ts">
	import { indicators, roadmapData, showCardDisplay, videoInMotion } from '$lib/stores/state'
	import Indicator from './indicator.svelte'

	let indicator: { id: number; left: number; top: number } | undefined

	$: indicator = $indicators
		.filter((indicator) => !$roadmapData?.seenItems.includes(indicator.id))
		.shift()
</script>

{#if indicator && !$showCardDisplay && !$videoInMotion}
	<Indicator {...indicator} />
{/if}
