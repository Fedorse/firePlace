<script>
	import { BASE_URL } from '$lib/utils/environment';
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
