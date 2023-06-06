<script lang="ts">
	import { browser } from '$app/environment'
	import { base } from '$app/paths'

	export let src: string
	export let cover = false

	let time = 0
	let duration: number | undefined
	let paused = false
	let video: HTMLVideoElement

	$: {
		if (browser && duration) video.play()
	}
</script>

<div class="absolute inset-0 w-full h-full overflow-hidden">
	<video
		autoplay
		muted
		src={base + '/' + src}
		class="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2"
		class:object-cover={cover}
		bind:currentTime={time}
		bind:duration
		bind:paused
		bind:this={video}
	/>
</div>
