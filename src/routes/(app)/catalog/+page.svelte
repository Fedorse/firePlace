<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { filters } from '$lib/stores/filters';
	import { filterProducts } from '$lib/utils/filters';
	import { fade } from 'svelte/transition';
	import Filters from '$lib/components/Filters.svelte';
	import Button from '$lib/components/Button.svelte';
	export let data;

	let filtredProducts = data.products;

	$: filtredProducts = filterProducts(
		data.products,
		$filters.categories.includes('all') ? [] : $filters.categories
	);
</script>

<div class="px-20">
	<div class="flex justify-between my-10">
		<div class="">
			<h1 class="text-5xl font-bold mb-2">Our catalog</h1>
			<p class="text-zinc-500 text-xl">Catalog gas firetables test test description</p>
		</div>
		<div class="self-center">
			<Button text="Download catalog" variant="outline" type="button" />
		</div>
	</div>
	<Filters {data} />
	<div class="grid grid-cols-3 gap-y-4 gap-x-8 2xl:grid-cols-4">
		{#each filtredProducts as product (product.id)}
			<div in:fade={{ duration: 250 }}>
				<ProductCard {product} />
			</div>
		{:else}
			<p class="text-xl">Product not found</p>
		{/each}
	</div>
</div>
