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
	export let product;

	let selectedTab = 'tab1';

	let selectedCategory = product.category.id;
	let selectedTags = product.productTags.map((tag) => tag.tagId);
	console.log(selectedTags);
</script>

<div class="flex flex-col w-full p-10 bg-gray-50 shadow-sm rounded-lg">
	<form
		method="POST"
		use:enhance={() =>
			async ({ update }) => {
				await update({ reset: false });
			}}
		class="flex flex-col gap-y-4"
		enctype="multipart/form-data"
	>
		<input type="hidden" name="id" value={product.id} />
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
								bind:value={product.name}
								name="name"
								label="Название"
								placeholder="Добавьте название товара"
							/>
							<TextArea
								bind:value={product.description}
								name="description"
								placeholder="Добавьте описание"
								label="Добавьте описание товара"
							/>
							<TextArea
								required={true}
								bind:value={product.short_description}
								name="short_description"
								placeholder="Добавьте краткое описание"
								label="Добавьте краткое описание товара"
							/>
							<Integer
								required={true}
								bind:value={product.price}
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
		<div class="items-center flex justify-center gap-4">
			<Button
				formaction="?/updateProduct"
				text="Обновить продукт"
				variant="bg-blue-500"
				variantHover="bg-blue-600"
			/>

			{#if product.published}
				<Button
					formaction="?/unpublishProduct"
					text="Поместить в архив"
					variant="bg-yellow-500"
					variantHover="bg-yellow-600"
				/>
			{:else}
				<Button
					formaction="?/publishProduct"
					text="Опубликовать"
					variant="bg-yellow-500"
					variantHover="bg-yellow-600"
				/>
			{/if}
			<Button
				formaction="?/deleteProduct"
				text="Удалить"
				variant="bg-red-500"
				variantHover="bg-red-600"
			/>
		</div>
	</form>
</div>
