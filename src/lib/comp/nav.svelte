<script>
	import { viewIntroState } from '$lib/changeState'
	import { showNav } from '$lib/state'
</script>

{#if $showNav}
	<nav class="flex gap-6">
		<button on:click={viewIntroState} type="button">Back</button>
		<button on:click={viewIntroState} type="button">Home</button>
		<button on:click={viewIntroState} type="button">Info</button>
	</nav>
{/if}
