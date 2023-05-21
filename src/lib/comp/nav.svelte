<script>
	import { showNav } from '$lib/state'
</script>

{#if showNav}
	<nav class="flex gap-6">
		<button type="button">Back</button>
		<button type="button">Home</button>
		<button type="button">Info</button>
	</nav>
{/if}
