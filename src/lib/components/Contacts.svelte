<script>
	import Map from '$lib/components/Map.svelte';
	import Facebook from '$lib/components/icons/Facebook.svelte';
	import Instagram from '$lib/components/icons/Instagram.svelte';
	import YouTube from '$lib/components/icons/YouTube.svelte';
</script>

<div class="px-20">
	<div class="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-lg overflow-hidden shadow-lg">
		<div class="flex items-center justify-center h-[600px] relative">
			<img src="/assets/ContactsCard.jpeg" alt="map" class="object-cover w-full h-full" />
			<div class="absolute inset-0 opacity-50 bg-black"></div>
			<div class="absolute inset-0 left-10 top-20 text-orange-50">
				<div>
					<h1 class="text-5xl uppercase mb-12 font-bold">Showroom Koh Samui</h1>
				</div>
				<div class="p-4">
					<h2 class="text-4xl font-semibold">Mob/Whatsapp/Line:</h2>
					<a href="tel:+669559 0 9533" class="text-xl hover:underline cursor-pointer">
						+669559 0 9533
					</a>
				</div>
				<div class="p-4">
					<h2 class="text-4xl font-semibold">Address:</h2>
					<p class="text-xl">11/29, Moo6, Maenam, KohSamui, 84330, Thailand</p>
				</div>
				<div class="p-4">
					<h2 class="text-4xl font-semibold">Social media:</h2>
					<div class="text-xl flex items-center gap-4">
						<a
							href="https://www.instagram.com/fireplace.life/reels/?locale=undefined&hl=am-et"
							class="flex items-center gap-2 hover:text-orange-500 transition"
							><Instagram /> Instagram</a
						>
						<a
							href="https://www.facebook.com/fireplace.life/"
							class="flex items-center gap-2 hover:text-orange-500 transition"
							><Facebook /> Facebook</a
						>
						<a
							href="https://www.youtube.com/@fireplace_thailand/videos"
							class="flex items-center gap-2 hover:text-orange-500 transition"
							><YouTube /> YouTube</a
						>
					</div>
				</div>
			</div>
		</div>
		<div class="flex h-[600px]">
			<Map />
		</div>
	</div>
</div>
