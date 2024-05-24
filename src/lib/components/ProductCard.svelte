<script>
	import Baht from './icons/Baht.svelte';
	import { BASE_URL } from '$lib/utils/environment';
	export let product;
</script>

<div
	class="h-[450px] w-[400px] rounded-xl overflow-hidden shadow-xl
"
>
	<img
		class="w-full h-1/2 object-cover"
		src={product.imgUrl || '/default_product.jpg'}
		alt="fireplace"
	/>

	<div class=" h-1/2 pl-4 pt-2 gap-2 flex flex-col">
		<a href={`${BASE_URL}/catalog/${product.id}`} class="font-medium text-xl max-w-72"
			>{product.name}
		</a>

		<p class="text-zinc-500 text-lg">Ceramic</p>
		<p class="text-orange-600 text-2xl flex items-center">{product.price}<Baht /></p>
		<button class="bg-orange-600 rounded-full w-24 text-white p-1 self-center">In box</button>
	</div>
</div>
