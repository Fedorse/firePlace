<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { filters } from '$lib/stores/filters';
	import { filterProducts } from '$lib/utils/filters';
	export let data;

	let filtredProducts = data.products;

	$: filtredProducts = filterProducts(data.products, $filters.categories);
</script>

<div class="px-20">
	<div class="flex justify-between my-14">
		<div class="">
			<h1 class="text-4xl font-bold uppercase mb-2">Catalog</h1>
			<p class="text-zinc-500 text-lg">Catalog gas firetables test test description</p>
		</div>
		<div class="self-center">
			<button class="outline border-orange-600 w-48 text-orange-600 border-1 rounded-3xl p-3"
				>Download catalog</button
			>
		</div>
	</div>
	<div class="justify-evenly flex p-4 text-xl">
		<div class="cursor-pointer" on:click={filters.reset}>All</div>
		{#each data.categories as category}
			<div
				class="cursor-pointer"
				on:click={() => filters.toggleCategory(category.id)}
				class:active={$filters.categories.includes(category.id)}
			>
				{category.name}
			</div>
		{/each}
	</div>

	<div class="grid grid-cols-3 gap-y-4 gap-x-8 2xl:grid-cols-4">
		{#each filtredProducts as product (product.id)}
			<div class="">
				<ProductCard {product} />
			</div>
		{/each}
	</div>
</div>

<style>
	.active {
		background-color: #ffdd57;
		color: white;
		border-radius: 4px;
		padding: 4px 8px;
	}
</style>
