<script>
	import { enhance } from '$app/forms';

	export let data;
	let forms = {};
</script>

<h1 class="text-center text-2xl font-semibold mb-10">Добавленные товары</h1>
<div class="px-10">
	<table class="text-lg min-w-full rounded-lg overflow-hidden">
		<thead class="text-xl bg-gray-200">
			<tr>
				<th class="text-left py-3 font-semibold pl-10">Название</th>
				<th class="text-left py-3 font-semibold pl-10">Категория</th>
				<th class="py-3 font-semibold text-center">Опубликован</th>
			</tr>
		</thead>

		<tbody>
			{#each data.product as product (product.id)}
				<tr class="border-b last:border-none">
					<td
						class="text-slate-500 py-2 pl-10 rounded-lg hover:text-blue-700 hover:bg-slate-200 cursor-pointer text-lg"
					>
						<a class="block" href="/admin/products/{product.id}">{product.name}</a>
					</td>
					<td class="py-2 px-2 text-lg text-slate-500 pl-10">
						{product.category?.name || 'Без категории'}
					</td>

					<td class="flex justify-center pt-2">
						<form
							use:enhance={() =>
								async ({ update }) => {
									await update({ reset: false });
								}}
							action="?/unpublishProduct"
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
