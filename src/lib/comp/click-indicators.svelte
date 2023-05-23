<script lang="ts">
	import { indicators } from '$lib/comp/stores/state'
	import Indicator from './indicator.svelte'
</script>

{#each $indicators as indicator}
	<Indicator left={indicator.left} top={indicator.top} />
{/each}
