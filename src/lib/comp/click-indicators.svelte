<script lang="ts">
	import { indicators } from '$lib/state'
	import Indicator from './indicator.svelte'
</script>

{#each $indicators as indicator}
	<Indicator left={indicator.left} top={indicator.top} />
{/each}
