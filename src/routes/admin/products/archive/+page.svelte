<script>
	import { enhance } from '$app/forms';
	import AdminTitle from '$lib/components/admin/AdminTitle.svelte';
	import AdminEditIcon from '$lib/components/icons/AdminEditIcon.svelte';
	import CheckBox from '$lib/components/icons/CheckBox.svelte';
	import { toasts } from '$lib/stores/toasts';
	export let data;
	let forms = {};
</script>

<AdminTitle text="Архив неопубликованных товаров" />

<div class="text-lg min-w-full rounded-lg overflow-hidden px-24">
	<table class="text-lg w-full rounded-lg overflow-hidden shadow-lg">
		<thead class="text-xl bg-slate-200 border-slate-300 border">
			<tr>
				<th class="py-3 font-semibold text-left pl-10">Название</th>
				<th class="py-3 font-semibold text-center min-w-44">В архиве</th>
			</tr>
		</thead>
		<tbody>
			{#each data.product as product (product.id)}
				<tr class="border-slate-300 border">
					<td
						class="text-slate-500 py-4 pl-10 rounded-lg cursor-pointer text-lg hover:text-black hover:bg-slate-200"
					>
						<div class="flex gap-4 pr-2">
							<a class="block w-full max-w-lg h-full truncate" href="/admin/products/{product.id}"
								>{product.name}</a
							>
							<AdminEditIcon />
						</div></td
					>

					<td class="flex justify-center pt-4">
						<form
							use:enhance={() =>
								async ({ update }) => {
									await update({ reset: false });
									toasts.add('Товар опубликован', 'warning');
								}}
							action="?/publishProduct"
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
