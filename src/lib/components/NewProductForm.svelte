<script>
	import Input from '$lib/components/formInputs/Input.svelte';
	import TextArea from '$lib/components/formInputs/TextArea.svelte';
	import Tags from '$lib/components/formInputs/Tags.svelte';
	import CategorySelect from '$lib/components/formInputs/CategorySelect.svelte';
	import Button from '$lib/components/formInputs/Button.svelte';
	import Image from '$lib/components/formInputs/Image.svelte';
	import { enhance } from '$app/forms';
	import { toasts } from '$lib/stores/toasts';
	import WeightSelect from './formInputs/WeightSelect.svelte';
	import Video from './formInputs/Video.svelte';
	import Integer from './formInputs/Integer.svelte';

	export let categories;
	export let tags;

	let loading = false;

	let name = '';
	let name_en = '';
	let short_description = '';
	let short_description_en = '';
	let description = '';
	let description_en = '';
	let price = '';
	let selectedCategory;
	let selectedTags = [];
	let imageSrc;
	let videoSrc;
	let weight = 'гр';
	let weight_amount = 1.0;
	let thc = '';
</script>

<form
	use:enhance={() => {
		loading = true;
		return async ({ update }) => {
			await update({ reset: false });
			name = '';
			name_en = '';
			short_description = '';
			short_description_en = '';
			description = '';
			description_en = '';
			price = '';
			selectedCategory = undefined;
			selectedTags = [];
			imageSrc = '';
			videoSrc = '';
			weight = 'гр';
			weight_amount = 1.0;
			thc = '';
			toasts.add('Добавлен новый товар');
			loading = false;
		};
	}}
	class="card flex flex-col gap-y-4 bg-base-100 shadow-xl rounded-lg p-4"
	method="post"
	enctype="multipart/form-data"
>
	<div class="w-full flex">
		<div class="relative w-1/2 h-64 overflow-hidden">
			<Image src={imageSrc} uniqueId="image-newProduct" />
		</div>
		<div class="relative w-1/2 h-64 overflow-hidden">
			<Video src={videoSrc} uniqueId="video-newProduct" />
		</div>
	</div>
	<div class="card-body p-0 sm:p-4">
		<div role="tablist" class=" tabs sm:tabs-lg tabs-boxed w-full">
			<input
				type="radio"
				name="newProduct"
				role="tab"
				class="tab whitespace-nowrap"
				aria-label="Основная информация"
				checked={true}
			/>
			<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box sm:p-6">
				<div class="flex flex-col gap-5">
					<Input
						required={true}
						bind:value={name}
						name="name"
						label="Название"
						placeholder="Добавьте название товара"
					/>
					<TextArea
						required={true}
						bind:value={short_description}
						name="short_description"
						label="Краткое описание товара"
						placeholder="Добавьте краткое описание"
					/>
					<TextArea
						bind:value={description}
						name="description"
						label="Описание"
						placeholder="Добавьте описание товара"
					/>
					<Integer
						required={true}
						name="price"
						bind:value={price}
						placeholder="Добавьте цену товара"
						label="Цена"
					/>
					<WeightSelect bind:weightCategory={weight} />
					<Integer
						bind:value={weight_amount}
						step={0.1}
						name="weight_amount"
						label="Количество грамм/штук"
						placeholder="Добавьте количество"
					/>
					<Input
						bind:value={thc}
						name="thc"
						label="Количество THC"
						placeholder="Добавьте количество THC"
					/>
					<CategorySelect {categories} bind:selectedCategory />
					<Tags {tags} bind:selectedTags />
				</div>
			</div>
			<input type="radio" name="newProduct" role="tab" class="tab" aria-label="Локализация" />
			<div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box sm:p-6">
				<div class="flex flex-col gap-5">
					<Input label="Name" bind:value={name_en} name="name_en" placeholder="Add product name" />
					<TextArea
						bind:value={short_description_en}
						name="short_description_en"
						label="Short description"
						placeholder="Add short description"
					/>
					<TextArea
						bind:value={description_en}
						label="Description"
						name="description_en"
						placeholder="Add product description"
					/>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-col-reverse items-center gap-5">
		<Button formaction="?/addProduct" text="Добавить продукт" />

		{#if loading}
			<span class="loading text-secondary loading-spinner loading-md"></span>
		{/if}
		<div />
	</div>
</form>
