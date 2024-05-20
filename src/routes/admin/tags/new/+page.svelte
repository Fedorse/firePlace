<script>
	import { enhance } from '$app/forms';
	import Input from '$lib/components/admin/formInputs/Input.svelte';
	import Button from '$lib/components/admin/formInputs/Button.svelte';
	import AdminTitle from '$lib/components/admin/AdminTitle.svelte';
	import { toasts } from '$lib/stores/toasts';

	let selectedTab = 'tab1';
	let value = '';
	let value_en = '';
</script>

<AdminTitle text="Форма добавления нового тега" />

<div class="flex flex-col p-10 bg-slate-100 border-slate-200 border-2 shadow-sm rounded-xl">
	<form
		use:enhance={() =>
			async ({ update, result }) => {
				await update({ reset: false });
				value = '';
				value_en = '';
				if (result.type === 'success') {
					toasts.add('Добавлен новый тег');
				} else {
					toasts.add(result.data.error, 'error');
				}
			}}
		method="POST"
	>
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
					name="newProduct"
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
					name="newProduct"
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
								placeholder="Добавьте название тега"
								label="Название"
								required={true}
								bind:value
							/>
						</div>
					</div>
					<div class={selectedTab === 'tab2' ? 'block' : 'hidden'}>
						<div class="flex flex-col gap-3">
							<Input
								name="name_en"
								placeholder="Add a tag title"
								label="Name"
								required={false}
								bind:value={value_en}
							/>
						</div>
					</div>
				</div>
			</div>
			<div class="pb-5 pl-6">
				<Button formaction="?/addTag" text="Добавить тег" />
			</div>
		</div>
	</form>
</div>
