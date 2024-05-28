<script>
	import ArrowLeft from '$lib/components/icons/ArrowLeft.svelte';
	import ArrowRight from '$lib/components/icons/ArrowRight.svelte';
	export let data;
</script>

<div class="flex justify-between w-full px-24">
	{#if data.previousProduct}
		<a
			class=" flex-1 flex justify-start items-center text-zinc-500"
			href={`/catalog/${data.previousProduct.id}`}><ArrowLeft /> Previous product</a
		>
	{:else}
		<div class="flex-1"></div>
	{/if}
	<button class="mx-4 bg-orange-600 rounded-full w-44 text-white p-3">By now</button>

	{#if data.nextProduct}
		<a
			class="flex-1 text-right flex justify-end items-center text-zinc-500"
			href={`/catalog/${data.nextProduct.id}`}>Next product <ArrowRight /></a
		>
	{:else}
		<div class=" flex-1"></div>
	{/if}
</div>
