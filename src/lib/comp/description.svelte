<script>
	import { description, showCardDisplay, videoInMotion } from '$lib/stores/state'
	import { fly } from 'svelte/transition'
</script>

{#if $description && $videoInMotion || $showCardDisplay}
<div in:fly out:fly class="relative w-full">
	<div class="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

	<p class="select-none text-white opacity-70 py-20 w-full text-center">
		{$description}
	</p>
</div>
{/if}
