<script>
	import Instagram from './icons/Instagram.svelte';
	import Facebook from './icons/Facebook.svelte';
	import YouTube from './icons/YouTube.svelte';
</script>

<footer class=" text-black border-t-2 p-6 mt-10">
	<div class="container mx-auto flex flex-col md:flex-row justify-between items-center">
		<div class="flex items-center space-x-4 mb-4 md:mb-0">
			<a
				href="https://www.instagram.com/fireplace.life/reels/?locale=undefined&hl=am-et"
				class="hover:text-orange-500 transition"
				><Instagram />
			</a>
			<a href="https://www.facebook.com/fireplace.life/" class="hover:text-orange-500 transition"
				><Facebook />
			</a>
			<a
				href="https://www.youtube.com/@fireplace_thailand/videos"
				class="hover:text-orange-500 transition"
				><YouTube />
			</a>
		</div>

		<nav class="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
			<a href="#" class="hover:text-orange-500 transition">Contacts</a>
			<a href="#" class="hover:text-orange-500 transition">Your cart</a>
			<a href="#" class="hover:text-orange-500 transition">About us</a>
		</nav>

		<div class="text-center md:text-right">
			<p class="text-sm">&copy; 2024 Created by Samui Dev - All rights reserved</p>
		</div>
	</div>
</footer>
