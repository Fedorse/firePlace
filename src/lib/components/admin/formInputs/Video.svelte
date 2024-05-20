<script>
	import { getProductImageUrl } from '$lib/utils/environment';
	export let src = '';
	export let uniqueId;

	function handleChange(event) {
		const file = event?.target.files[0];
		if (file) {
			src = URL.createObjectURL(file);
		}
	}

	let currentVideo;
	$: {
		currentVideo = src && src.startsWith('blob') ? src : getProductImageUrl(src);
	}
</script>

<div class="flex-1 h-[260px] bg-slate-100 border-dashed border-2 border-slate-400 rounded-xl">
	<label for={uniqueId} class="cursor-pointer relative block">
		<video src={currentVideo} class="object-cover w-full h-64 rounded-lg p-1 z-30" controls>
		</video>
		<div
			class="cursor-pointer absolute top-0 left-0 w-full h-[180px] flex justify-center bg-slate-200 items-center opacity-10 hover:opacity-80 transition-opacity duration-300 ease-in-out"
		>
			<div class="pt-14 text-2xl">Загрузить видео</div>
		</div>
	</label>
	<input
		type="file"
		id={uniqueId}
		name="video"
		accept="video/*"
		on:change={handleChange}
		class="hidden"
	/>
</div>
