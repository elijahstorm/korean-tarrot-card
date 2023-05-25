<script>
	import { navBackState, viewIntroState, viewPopupModal } from '$lib/utils/changeState'
	import { showNav } from '$lib/stores/state'
</script>

{#if $showNav}
	<nav class="flex gap-6 text-white">
		<button on:click={navBackState} type="button">
			<img src="cards/back-button.svg" alt="Back button" />
		</button>
		<button on:click={viewIntroState} type="button">
			<img src="cards/home-button.svg" alt="Home button" />
		</button>
		<button on:click={viewPopupModal} type="button">
			<img src="cards/info-button.svg" alt="Info button" />
		</button>
	</nav>
{/if}
