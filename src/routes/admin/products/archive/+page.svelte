<script>
	import { enhance } from '$app/forms';
	export let data;
	let forms = {};
</script>

<h1 class="text-center text-2xl font-medium mb-10">Архив неопубликованных товаров</h1>

<div class="">
	<table class="text-lg min-w-full rounded-lg overflow-hidden shadow-sm">
		<thead class="text-xl bg-slate-200 border-slate-300 border">
			<tr>
				<th class="py-3 font-semibold text-left pl-10">Название</th>
				<th class="py-3 font-semibold text-center">В архиве</th>
			</tr>
		</thead>
		<tbody>
			{#each data.product as product (product.id)}
				<tr class="border-slate-300 border">
					<td
						class="text-slate-500 py-4 pl-10 rounded-lg cursor-pointer text-lg hover:text-black hover:bg-slate-200"
					>
						<a class="block" href="/admin/products/{product.id}">{product.name}</a>
					</td>

					<td class="flex justify-center pt-4">
						<form
							use:enhance={() =>
								async ({ update, action }) => {
									await update({ reset: false });
								}}
							action="?/publishProduct"
							method="POST"
							bind:this={forms[product.id]}
						>
							<input type="hidden" value={product.id} name="id" />
							<input
								type="checkbox"
								checked="checked"
								class="w-4 h-4"
								on:change={(e) => {
									forms[product.id].requestSubmit();
								}}
							/>
						</form>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
