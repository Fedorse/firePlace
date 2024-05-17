<script>
	import { enhance } from '$app/forms';
	import CategorySelect from '$lib/components/admin/formInputs/CategorySelect.svelte';
	import Tags from '$lib/components/admin/formInputs/Tags.svelte';
	import Image from '$lib/components/admin/formInputs/Image.svelte';
	import Video from '$lib/components/admin/formInputs/Video.svelte';
	import Input from '$lib/components/admin/formInputs/Input.svelte';
	import TextArea from '$lib/components/admin/formInputs/TextArea.svelte';
	import Integer from '$lib/components/admin/formInputs/Integer.svelte';
	import Button from '$lib/components/admin/formInputs/Button.svelte';

	export let categories;
	export let tags;

	let selectedCategory;
	let selectedTags = [];
	let selectedTab = 'tab1';
	let name = '';
	let description = '';
	let short_description = '';
	let price = '';
	let name_en = '';
</script>

<div class="flex flex-col w-full p-10 bg-gray-50 shadow-sm rounded-lg">
	<form
		method="POST"
		use:enhance={() =>
			async ({ update }) => {
				await update({ reset: false });
				name = '';
				description = '';
				short_description = '';
				price = '';
				selectedCategory = undefined;
				selectedTags = [];
			}}
		class="flex flex-col gap-y-4"
		enctype="multipart/form-data"
	>
		<div class="w-full flex">
			<Image />
			<Video />
		</div>
		<div class="py-4">
			<div class="w-full" role="tablist">
				<label
					for="tab1"
					class={`cursor-pointer p-2 text-center bg-slate-200 rounded-t-lg border-b-2 ${selectedTab === 'tab1' ? 'bg-slate-300 text-black border-blue-600 p-3`' : 'bg-slate-100'}`}
					>Основная информация</label
				>
				<input
					type="radio"
					id="tab1"
					name="newProduct"
					class="hidden"
					role="tab"
					checked
					bind:group={selectedTab}
					value="tab1"
				/>

				<label
					for="tab2"
					class={`cursor-pointer p-2 text-center  rounded-t-lg border-b-2 ${selectedTab === 'tab2' ? 'bg-slate-300 text-black border-blue-600 p-3' : 'bg-slate-100'}`}
					>Локализация</label
				>
				<input
					type="radio"
					id="tab2"
					name="newProduct"
					class="hidden"
					role="tab"
					bind:group={selectedTab}
					value="tab2"
				/>

				<div class="pt-10">
					<div class={selectedTab === 'tab1' ? 'block ' : 'hidden'}>
						<div class="flex flex-col gap-4">
							<Input
								required={true}
								bind:value={name}
								name="name"
								label="Название"
								placeholder="Добавьте название товара"
							/>
							<TextArea
								bind:value={description}
								name="description"
								placeholder="Описание"
								label="Добавьте описание товара"
							/>
							<TextArea
								required={true}
								bind:value={short_description}
								name="short_description"
								placeholder="Краткое описание"
								label="Добавьте краткое описание товара"
							/>
							<Integer
								required={true}
								bind:value={price}
								name="price"
								placeholder="Добавьте цену товара"
								label="Цена"
							/>
							<CategorySelect {categories} bind:selectedCategory />
							<Tags {tags} bind:selectedTags />
						</div>
					</div>
					<div class={selectedTab === 'tab2' ? 'block' : 'hidden'}>
						<div class="flex flex-col gap-5">
							<p>local</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="items-center justify-center flex">
			<Button formaction="?/addProduct" text="Добавить продукт" />
		</div>
	</form>
</div>
