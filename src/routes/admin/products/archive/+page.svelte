<script>
	import { enhance } from '$app/forms';
	export let data;
	let forms = {};
</script>

<h1 class="text-center text-2xl font-semibold mb-10">Архив неопубликованных товаров</h1>
<div class="px-10">
	<table class="min-w-full text-lg overflow-hidden rounded-lg">
		<thead class="text-xl bg-slate-200">
			<tr>
				<th class="py-3 font-semibold text-left pl-10">Название</th>
				<th class="py-3 font-semibold text-center">В архиве</th>
			</tr>
		</thead>
		<tbody>
			{#each data.arhivedProducts as product (product.id)}
				<tr class="border-b last:border-none">
					<td
						class=" py-2 pl-10 text-slate-500 rounded-lg hover:text-blue-700 hover:bg-slate-200 cursor-pointer text-lg"
					>
						<a class="block" href="/admin/products/{product.id}">{product.name}</a>
					</td>

					<td class="flex justify-center pt-2">
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
