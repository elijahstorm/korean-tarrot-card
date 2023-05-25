<script>
	import { onMount, onDestroy } from 'svelte'
	import { onStateChange, setModalState } from '../stores/modalStore' // Replace with your own store and actions
	import { fade } from 'svelte/transition'

	let showModal = false

	const close = () => {
		setModalState(false) // Update the global state to hide the modal
	}

	onMount(() => {
		const unsubscribe = onStateChange((state) => {
			showModal = state // Update the local state when the global state changes
		})

		return () => {
			unsubscribe() // Unsubscribe from the global state changes on component destruction
		}
	})
</script>

{#if showModal}
	<div
		class="fixed inset-0 w-full h-full flex justify-center items-center z-50 pointer-events-auto"
		style="background-color: rgba(0, 0, 0, 0.5)"
		in:fade
		out:fade
	>
		<div class="shadow rounded p-4 bg-white">
			<button on:click={close} class="btn" type="button">Close</button>
			<!-- Modal content here -->
		</div>
	</div>
{/if}
