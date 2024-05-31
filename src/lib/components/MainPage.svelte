<script>
	import { onMount } from 'svelte';
	import { BASE_URL } from '$lib/utils/environment';
	import { spring } from 'svelte/motion';

	const scale = spring(1, { stiffness: 0.1, damping: 0.9 });

	const handleScroll = () => {
		const scrollY = window.scrollY;
		scale.set(Math.max(1 - scrollY / 1000, 0.8));
	};

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});
</script>

<div class="relative h-screen overflow-hidden rounded-lg" style="transform: scale({$scale})">
	<img
		src="/assets/main_page.jpg"
		class="absolute inset-0 w-full h-full object-cover"
		alt="main_page_jpg"
	/>
	<div class="absolute inset-0 bg-black/40"></div>
	<div
		class="absolute top-96 transition-all hover:text-orange-500 left-24 flex flex-col text-orange-50 items-start justify-center"
	>
		<a href={`${BASE_URL}/catalog`}>
			<h1 class="cursor-default text-8xl uppercase font-bold max-w-4xl mb-4">
				Exclusive fire products
			</h1>
			<p class="mt-3 cursor-default text-6xl">Online catalog</p>
		</a>
	</div>
</div>

<style>
</style>
