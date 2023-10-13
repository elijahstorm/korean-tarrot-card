<script>
	import { navBackState, viewIntroState, viewPopupModal } from '$lib/utils/changeState'
	import { showNav } from '$lib/stores/state'
	import { fly } from 'svelte/transition'
	import { base } from '$app/paths'
</script>

{#if $showNav}
	<nav in:fly out:fly class="flex gap-8 text-white">
		<button on:click={navBackState} type="button">
			<img class="w-8" src="{base}/nav/back-button.svg" alt="Back button" />
		</button>
		<button on:click={viewIntroState} type="button">
			<img class="w-8" src="{base}/nav/home-button.svg" alt="Home button" />
		</button>
		<button on:click={viewPopupModal} type="button">
			<img class="w-8" src="{base}/nav/info-button.svg" alt="Info button" />
		</button>
	</nav>
{/if}
