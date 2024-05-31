<script>
	import Baht from './icons/Baht.svelte';
	import { BASE_URL } from '$lib/utils/environment';
	import Tag from './Tag.svelte';
	import { goto } from '$app/navigation';

	export let product;

	const formatNumber = (number) => {
		return number.toLocaleString('en-US').replace(/,/g, ' ');
	};
</script>

<div
	class="h-[450px] w-[400px] rounded-xl overflow-hidden shadow-xl relative
	
"
>
	<img
		class="w-full h-1/2 object-cover"
		src={product.imgUrl || '/default_product.jpg'}
		alt="fireplace"
	/>
	<div
		class="absolute inset-0 flex flex-col"
		on:click={() => {
			goto(`${BASE_URL}/catalog/${product.id}`);
		}}
	>
		{#each product.productTags as productTag (productTag.tag.id)}
			<Tag tag={productTag.tag.name} />
		{/each}
	</div>
	<div class=" h-1/2 pl-4 pt-2 gap-2 flex flex-col relative justify-between">
		<a
			href={`${BASE_URL}/catalog/${product.id}`}
			class="font-medium text-xl max-w-72 cursor-pointer"
			>{product.name}
		</a>

		<p class="text-zinc-500 text-lg">{product.sizes}</p>
		<p class="text-orange-600 text-2xl flex items-center">{formatNumber(product.price)}<Baht /></p>
		<button class="bg-orange-600 rounded-full w-24 text-white p-1 self-center mb-4">In box</button>
	</div>
</div>
