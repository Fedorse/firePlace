<script>
	import ProductCard from '$lib/components/ProductCard.svelte';
	import { filters } from '$lib/stores/filters';
	import { filterProducts } from '$lib/utils/filters';
	import { fade } from 'svelte/transition';
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
			<button
				class="outline border-orange-600 w-48 text-orange-600 border-1 rounded-3xl p-3 hover:bg-orange-400 hover:text-white transition-colors duration-300 ease-in-out"
				>Download catalog</button
			>
		</div>
	</div>
	<div class="justify-around flex text-xl mb-10">
		<div
			class="cursor-pointer text-zinc-500 hover:bg-orange-400 hover:text-white p-2 px-4 rounded-3xl transition-colors duration-300 ease-in-out"
			on:click={filters.reset}
			class:active={$filters.categories.includes('all')}
		>
			All
		</div>
		{#each data.categories as category (category.id)}
			<div
				class="cursor-pointer text-zinc-500 hover:bg-orange-400 hover:text-white p-2 px-4 rounded-3xl transition-colors duration-300 ease-in-out"
				on:click={() => filters.toggleCategory(category.id)}
				class:active={$filters.categories.includes(category.id)}
			>
				{category.name}
			</div>
		{/each}
	</div>

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

<style>
	.active {
		@apply bg-orange-600 text-white rounded-3xl;
	}
</style>
