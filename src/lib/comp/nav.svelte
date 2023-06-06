<script>
	import { navBackState, viewIntroState, viewPopupModal } from '$lib/utils/changeState'
	import { showNav } from '$lib/stores/state'
	import { fly } from 'svelte/transition'
	import { base } from '$app/paths'
</script>

{#if $showNav}
	<nav in:fly out:fly class="flex gap-6 text-white">
		<button on:click={navBackState} type="button">
			<img src="{base}/nav/back-button.svg" alt="Back button" />
		</button>
		<button on:click={viewIntroState} type="button">
			<img src="{base}/nav/home-button.svg" alt="Home button" />
		</button>
		<button on:click={viewPopupModal} type="button">
			<img src="{base}/nav/info-button.svg" alt="Info button" />
		</button>
	</nav>
{/if}
