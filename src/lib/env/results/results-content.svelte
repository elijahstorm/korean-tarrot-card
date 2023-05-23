<script>
	import { Lang } from '$lib/lang'

	const cards = [
		{
			title: '과거',
			info: '은둔자',
			image: '',
		},
		{
			title: '과거',
			info: '은둔자',
			image: '',
		},
		{
			title: '과거',
			info: '은둔자',
			image: '',
		},
	]
</script>

<section class="flex gap-8">
	<div class="flex-2 flex gap-4">
		{#each cards as card}
			<div class="card bg-blue-500 flex flex-col gap-4">
				<h5>{card.title}</h5>

				<div class="card">
					<img src={card.image} alt="image of {card.title}" />

					<h6>{card.info}</h6>
				</div>
			</div>
		{/each}
	</div>

	<div class="flex-1 flex flex-col gap-4">
		<button>{Lang.results.headerButton}</button>

		<h3>{Lang.results.header}</h3>

		<p>{Lang.results.content}</p>
	</div>
</section>
