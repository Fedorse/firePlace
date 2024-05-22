<script>
	import { BASE_URL } from '$lib/utils/environment';
	export let data;

	const customerImg = [
		'custmer-1.jpeg',
		'custmer-2.jpeg',
		'custmer-3.jpeg',
		'custmer-4.jpeg',
		'custmer-5.jpeg',
		'custmer-6.jpeg',
		'custmer-7.jpeg',
		'custmer-8.jpeg',
		'custmer-9.jpeg'
	];
</script>

<div class="relative h-screen">
	<img
		src="/assets/main_page.jpg"
		class="absolute inset-0 w-full h-full object-cover"
		alt="main_page_jpg"
	/>
	<div class="absolute inset-0 opacity-10 bg-black"></div>
	<div class="absolute top-96 left-24 flex flex-col text-orange-50 items-start justify-center">
		<h1 class="text-8xl uppercase font-bold max-w-4xl mb-4">Exclusive fire products</h1>
		<p class="text-4xl uppercase max-w-64">your design, our qauity</p>
		<a
			href="{BASE_URL}/catalog"
			class="self-end border-white w-48 text-white bg-orange-600 border-1 rounded-full p-4 hover:bg-orange-800 transition-colors duration-300 ease-in-out text-center inline-block"
		>
			Catalog
		</a>
	</div>
</div>

<div class="mt-20">
	<div class="px-20">
		<h1 class="font-bold uppercase text-5xl text-black mb-2">Our Customers</h1>
		<p class="text-zinc-500 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
	</div>
	<div class="grid grid-cols-3 gap-4 place-items-center pt-12">
		{#each customerImg as img}
			<div class="w-40 h-36">
				<img src={`/customer-card/${img}`} alt="customer-card" class="object-cover" />
			</div>
		{/each}
	</div>
</div>
