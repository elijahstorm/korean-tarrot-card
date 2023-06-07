<script lang="ts">
	import BgVideo from '$lib/comp/bg-video.svelte'
	import { videoState } from '$lib/stores/video-state'
</script>

<div
	class="bg-black absolute inset-0 w-full h-full overflow-hidden bg-gradient-to-b from-[#231d23] to-[#271c2f]"
/>

<BgVideo src="backgrounds/selection/whole-animation.mp4" />

{#if $videoState !== ''}
	<BgVideo src="backgrounds/selection/{$videoState}.mp4" />
{/if}
