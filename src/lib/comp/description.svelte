<script>
	import { description } from '$lib/stores/state'
	import { fly } from 'svelte/transition'
</script>

{#if $description}
	<p in:fly out:fly class="select-none text-white opacity-70">
		{$description}
	</p>
{/if}
