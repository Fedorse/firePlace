<script>
	import { enhance } from '$app/forms';
	import Button from '$lib/components/admin/formInputs/Button.svelte';
	import AdminTitle from '$lib/components/admin/AdminTitle.svelte';
	import Input from '$lib/components/admin/formInputs/Input.svelte';
	import Palette from '$lib/components/icons/Palette.svelte';
	import { toasts } from '$lib/stores/toasts';

	let isLoading = false;
	let hex = '#808080';
	let name = '';
</script>

<AdminTitle text="Форма добавления нового цвета" />

<div class="flex flex-col p-10 bg-slate-100 border-slate-200 border-2 shadow-sm rounded-xl">
	<form
		use:enhance={() => {
			isLoading = true;
			return async ({ update, result }) => {
				await update({ reset: false });
				isLoading = false;
				hex = '#808080';
				name = '';
				if (result.type === 'success') {
					toasts.add('Добавлен новый цвет');
				} else {
					toasts.add(result.data.error, 'error');
				}
			};
		}}
		method="POST"
	>
		<div class="flex flex-col gap-3">
			<Input name="name" placeholder="Добавьте название цвета" label="Название" bind:value={name} />
			<label for="colorPicker" class="label text-base font-medium">Выборать цвет</label>
			<div class="relative">
				<input
					bind:value={hex}
					name="hex"
					type="color"
					class="w-48 h-12 cursor-pointer border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-slate-500 pl-12"
				/>

				<Palette />
			</div>
		</div>

		<div class="pb-5 pt-5">
			<Button formaction="?/addColor" text="Добавить цвет" {isLoading} />
		</div>
	</form>
</div>

<style>
</style>
