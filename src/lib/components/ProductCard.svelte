<script>
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
		<h1 class="font-medium text-xl max-w-72">{product.name}</h1>
		<p class="text-zinc-500 text-lg">Ceramic</p>
		<p class="text-orange-600 text-lg">{product.price}B</p>
		<button class="bg-orange-600 rounded-full w-24 text-white p-1 self-center">In box</button>
	</div>
</div>
