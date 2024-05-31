<script>
	import AdminTitle from '$lib/components/admin/AdminTitle.svelte';
	import Button from '$lib/components/admin/formInputs/Button.svelte';
	import { enhance } from '$app/forms';
	import { toasts } from '$lib/stores/toasts';
	export let data;
	let forms = {};
</script>

<AdminTitle text="Добавленные цвета" />

<div class="text-lg min-w-full rounded-lg overflow-hidden px-24">
	<table class="text-lg w-full rounded-lg overflow-hidden shadow-lg">
		<thead class="text-xl bg-slate-200 border-slate-300 border">
			<tr>
				<th class="text-md font-semibold text-left pl-10 py-3">Цвет</th>
				<th class="text-md font-semibold text-left pl-10 py-3">Название</th>
				<th class="text-md font-semibold text-center pl-10 py-3"></th>
			</tr>
		</thead>
		<tbody>
			{#each data.colors as color (color.id)}
				<tr class="border-slate-300 border">
					<td class="py-4 rounded-lg text-lg">
						<div class="flex gap-4 items-center px-10">
							<div class="w-8 h-8 rounded-full" style="background-color: {color.hex};"></div>
						</div>
					</td>
					<td class="text-slate-500 py-4 rounded-lg text-lg">
						<div class="flex gap-4 justify-between px-10">
							<span>{color.name}</span>
						</div>
					</td>
					<td class="flex justify-center pt-4 items-center">
						<form
							use:enhance={() =>
								async ({ update }) => {
									await update({ reset: false });
									toasts.add('Цвет успешно удален', 'success');
								}}
							action="?/deleteColor"
							method="POST"
							bind:this={forms[color.id]}
						>
							<input type="hidden" value={color.id} name="id" />
							<Button text="Удалить" variant="bg-red-700" variantHover="bg-red-800" />
						</form>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
