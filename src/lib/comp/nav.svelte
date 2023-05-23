<script>
	import { navBackState, viewIntroState, viewPopupModal } from '$lib/changeState'
	import { showNav } from '$lib/comp/stores/state'
</script>

{#if $showNav}
	<nav class="flex gap-6 text-white">
		<button on:click={navBackState} type="button">Back</button>
		<button on:click={viewIntroState} type="button">Home</button>
		<button on:click={viewPopupModal} type="button">Info</button>
	</nav>
{/if}
