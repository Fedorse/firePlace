<script>
	import { enhance } from '$app/forms';
	import AdminTitle from '$lib/components/admin/AdminTitle.svelte';
	import AdminEditIcon from '$lib/components/icons/AdminEditIcon.svelte';
	import CheckBox from '$lib/components/icons/CheckBox.svelte';
	import { toasts } from '$lib/stores/toasts';

	export let data;
	let forms = {};
</script>

<AdminTitle text="Добавленные товары" />
<div class="text-lg min-w-full rounded-lg overflow-hidden px-24">
	<table class="text-lg w-full rounded-lg overflow-hidden shadow-lg">
		<thead class="text-xl bg-slate-200 border-slate-300 border">
			<tr>
				<th class="text-left py-3 font-semibold pl-2">Название</th>
				<th class="text-left py-3 font-semibold min-w-36">Категория</th>
				<th class="py-3 font-semibold text-center min-w-36">Опубликован</th>
			</tr>
		</thead>

		<tbody>
			{#each data.product as product (product.id)}
				<tr class="border-slate-300 border">
					<td
						class="text-slate-500 py-4 rounded-lg cursor-pointer text-lg hover:text-black hover:bg-slate-200"
					>
						<div class="flex gap-4 pl-2 pr-2">
							<a class="block w-full h-full max-w-lg truncate" href="/admin/products/{product.id}"
								>{product.name}</a
							>
							<AdminEditIcon />
						</div></td
					>
					<td class=" text-lg text-slate-500">
						{product.category?.name || 'Без категории'}
					</td>

					<td class="flex justify-center pt-4">
						<form
							use:enhance={() =>
								async ({ update }) => {
									await update({ reset: false });
									toasts.add('Товар перемещен в архив', 'warning');
								}}
							action="?/unpublishProduct"
							method="POST"
							bind:this={forms[product.id]}
						>
							<label class="flex items-center cursor-pointer">
								<input type="hidden" value={product.id} name="id" />

								<input
									type="checkbox"
									class="hidden peer"
									value={product.id}
									checked="checked"
									on:change={(e) => {
										forms[product.id].requestSubmit();
									}}
								/>
								<div
									class="w-5 h-5 border border-slate-500 rounded-lg shadow-md peer-checked:bg-slate-600 peer-checked:border-teal-700 flex items-center justify-center"
								>
									<CheckBox />
								</div>
							</label>
						</form>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
