<script>
	import Baht from '$lib/components/icons/Baht.svelte';
	import PageSlider from '$lib/components/PageSlider.svelte';
	import Tag from '$lib/components/Tag.svelte';
	const { data } = $props();

</script>

<div class="flex gap-10 pt-24 px-24 pb-5">
	<div class="flex w-1/2 h-[75vh] relative">
		<img
			src={data.product?.imgUrl || '/default_product_prduct.jpg'}
			alt="img_product"
			class="rounded-xl object-cover w-full h-full"
		/>
		<div class="absolute inset-0 flex flex-col">
			{#each data.product.productTags as productTag (productTag.tag.id)}
				<Tag tag={productTag.tag.name} />
			{/each}
		</div>
	</div>
	<div class="flex flex-col w-1/2 h-full gap-4">
		<h1 class="text-3xl max-w-lg lg:max-w-xl font-medium">{data.product?.name}</h1>
		<p class="text-zinc-500">{data.product?.sizes}</p>
		{#if data.product?.productColors && data.product.productColors.length > 0}
			<h1 class="font-medium text-lg">Color</h1>
			<div class="flex flex-row gap-3">
				{#each data.product?.productColors as productColor (productColor.color.id)}
					<div
						class="h-6 w-6 rounded-full"
						style="background-color: {productColor.color.hex};"
					></div>
				{/each}
			</div>
		{/if}
		<p class="text-zinc-500">{data.product?.short_description}</p>
		<p class="text-zinc-500">{data.product?.description}</p>
		<div class="flex items-center">
			<p class="text-3xl">{data.product?.price}</p>
			<span><Baht /></span>
		</div>
	</div>
</div>
<PageSlider {data} />

<style>
</style>
