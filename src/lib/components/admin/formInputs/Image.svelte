<script>
	import { getProductImageUrl } from '$lib/utils/environment';

	export let src;
	export let alt = 'Изображение продукта';
	export let uniqueId;

	function handleChange(event) {
		const file = event.target.files[0];
		if (file) {
			src = URL.createObjectURL(file);
		}
	}

	let currentImage;

	$: {
		currentImage = src && src.startsWith('blob') ? src : getProductImageUrl(src);
	}
</script>

<div class="flex-1 h-[260px] bg-slate-100 border-dashed border-2 border-slate-400 rounded-xl">
	<label for={uniqueId} class="cursor-pointer relative block">
		<img src={currentImage} {alt} class="object-cover w-full rounded-lg h-64 p-1" />
		<div
			class="cursor-pointer absolute top-0 left-0 w-full h-full flex justify-center bg-slate-200 items-center opacity-10 hover:opacity-80 transition-opacity duration-300 ease-in-out"
		>
			<div class="p-2 text-2xl">Загрузить изображение</div>
		</div>
	</label>
	<input
		type="file"
		id={uniqueId}
		name="image"
		accept="image/*"
		class="hidden"
		on:change={handleChange}
	/>
</div>
