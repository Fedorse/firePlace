<script>
	import Baht from '$lib/components/icons/Baht.svelte';
	import ArrowLeft from '$lib/components/icons/ArrowLeft.svelte';
	import ArrowRight from '$lib/components/icons/ArrowRight.svelte';

	const { data } = $props();
	console.log(data.product?.sizes);
</script>

<div class="flex gap-10 pt-24 px-24 pb-5">
	<div class="flex w-1/2 h-[75vh]">
		<img
			src={data.product?.imgUrl || '/default_product_prduct.jpg'}
			alt="img_product"
			class="rounded-xl object-cover w-full h-full"
		/>
	</div>
	<div class="flex flex-col w-1/2 h-full gap-5">
		<h1 class="text-3xl max-w-lg lg:max-w-xl font-medium">{data.product?.name}</h1>
		<p class="text-zinc-500">{data.product?.sizes}</p>
		<p class="text-zinc-500">{data.product?.short_description}</p>
		<p class="text-zinc-500">{data.product?.description}</p>
		<div class="flex items-center">
			<p class="text-3xl">{data.product?.price}</p>
			<span><Baht /></span>
		</div>
	</div>
</div>
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

<style>
</style>
