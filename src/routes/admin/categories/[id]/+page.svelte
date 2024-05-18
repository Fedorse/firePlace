<script>
	import { enhance } from '$app/forms';
	import Input from '$lib/components/admin/formInputs/Input.svelte';
	import Button from '$lib/components/admin/formInputs/Button.svelte';

	export let data;

	let selectedTab = 'tab1';
</script>

<h1 class="text-2xl font-semibold text-center mb-10">Форма редактирования категории</h1>

<div class="flex flex-col px-10">
	<form
		use:enhance={() =>
			async ({ update }) => {
				await update({ reset: false });
			}}
		method="POST"
	>
		<input type="hidden" name="id" value={data.category?.id} />
		<div class="bg-slate-50 rounded-lg shadow-sm">
			<div class="w-full" role="tablist">
				<label
					for="tab1"
					class={`cursor-pointer p-2 text-center bg-slate-200 rounded-t-lg border-b-2 ${selectedTab === 'tab1' ? 'bg-slate-300 text-black border-blue-600 p-3' : 'bg-slate-100'}`}
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
					class={`cursor-pointer p-2 text-center bg-slate-200   rounded-t-lg border-b-2 ${selectedTab === 'tab2' ? 'bg-slate-300 text-black border-blue-600 p-3' : 'bg-slate-100'}`}
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
								placeholder="Добавьте название тега"
								label="Название"
								bind:value={data.category.name_en}
							/>
						</div>
					</div>
				</div>
			</div>

			<div class="flex gap-4 pl-6 pb-6">
				<Button
					formaction="?/updateCategory"
					text="Обновить тег"
					variant="bg-blue-500"
					variantHover="bg-blue-600"
				/>
				<Button
					formaction="?/deleteCategory"
					text="Удалить"
					variant="bg-red-500"
					variantHover="bg-red-600"
				/>
			</div>
		</div>
	</form>
</div>
