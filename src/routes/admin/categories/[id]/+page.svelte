<script>
	import { enhance } from '$app/forms';
	import Input from '$lib/components/admin/formInputs/Input.svelte';
	import Button from '$lib/components/admin/formInputs/Button.svelte';
	import AdminTitle from '$lib/components/admin/AdminTitle.svelte';
	import { toasts } from '$lib/stores/toasts';
	import { goto } from '$app/navigation';

	export let data;

	let selectedTab = 'tab1';
</script>

<AdminTitle text="Форма редактирования категории" />

<div class="flex flex-col p-10 bg-slate-100 border-slate-200 border-2 shadow-sm rounded-xl">
	<form
		use:enhance={({ action }) =>
			async ({ update, result }) => {
				await update({ reset: false });

				if (result.type !== 'success') {
					toasts.add(result.data.error, 'error');
					return;
				}

				if (action.search === '?/updateCategory') {
					toasts.add('Категория обновлена');
				} else if (action.search === '?/deleteCategory') {
					toasts.add('Категория удалена', 'error');
					goto(`/admin/categories`);
				}
			}}
		method="POST"
	>
		<input type="hidden" name="id" value={data.category?.id} />
		<div class="rounded-lg">
			<div class="w-full" role="tablist">
				<label
					for="tab1"
					class={`cursor-pointer p-3 text-center bg-slate-100 rounded-t-lg border-b-2 ${selectedTab === 'tab1' ? 'bg-slate-200 text-black border-slate-800 `' : 'bg-slate-100'}`}
					>Основная информация</label
				>
				<input
					type="radio"
					id="tab1"
					name="newTag"
					class="hidden"
					role="tab"
					checked
					bind:group={selectedTab}
					value="tab1"
				/>

				<label
					for="tab2"
					class={`cursor-pointer p-3 text-center  rounded-t-lg border-b-2 ${selectedTab === 'tab2' ? 'bg-slate-200 text-black border-slate-800 ' : 'bg-slate-100'}`}
					>Локализация</label
				>
				<input
					type="radio"
					id="tab2"
					name="newTag"
					class="hidden"
					role="tab"
					bind:group={selectedTab}
					value="tab2"
				/>

				<div class="tab-content rounded-b-lg p-6">
					<div class={selectedTab === 'tab1' ? 'block' : 'hidden'}>
						<div class="flex flex-col gap-3">
							<Input
								name="name"
								placeholder="Добавьте название категории"
								label="Название"
								required={false}
								bind:value={data.category.name}
							/>
						</div>
					</div>

					<div class={selectedTab === 'tab2' ? 'block' : 'hidden'}>
						<div class="flex flex-col gap-3">
							<Input
								name="name"
								placeholder="Add a category name"
								label="Name"
								bind:value={data.category.name_en}
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="flex gap-4 pl-6 pb-6">
				<Button formaction="?/updateCategory" text="Обновить категорию" />
				<Button
					formaction="?/deleteCategory"
					text="Удалить"
					variant="bg-red-700"
					variantHover="bg-red-800"
				/>
			</div>
		</div>
	</form>
</div>
