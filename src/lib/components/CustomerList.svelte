<script>
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
