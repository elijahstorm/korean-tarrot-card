<script lang="ts">
	export let left = 50
	export let top = 50

	$: style = `left: ${left}%; top: ${top}%;`
</script>

<div
	class="absolute w-min aspect-1 rounded-full overflow-clip p-6 opacity-40 bg-black text-white cursor-pointer hover:opacity-80 transition-opacity select-none"
	{style}
>
	click
</div>
