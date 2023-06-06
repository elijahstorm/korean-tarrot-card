<script lang="ts">
	import { base } from '$app/paths'
	import BgVideo from '$lib/comp/bg-video.svelte'
	import { videoState } from '$lib/stores/video-state'
</script>

<div class="bg-black absolute inset-0 w-full h-full overflow-hidden">
	<img
		class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
		src="{base}/backgrounds/cards/cards-bg.png"
		alt="card choice background"
	/>
</div>

<BgVideo src="backgrounds/selection/whole-animation.mp4" />

{#if $videoState !== ''}
	<BgVideo src="backgrounds/selection/{$videoState}.mp4" />
{/if}
