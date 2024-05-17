<script>
	export let data;
</script>

<h1 class="mb-10 pl-10 text-2xl font-semibold">Добавленные категории</h1>

<div class="px-10">
	<table class="text-lg overflow-hidden rounded-lg min-w-96">
		<thead class="text-xl">
			<tr>
				<th class="text-md font-semibold text-left pl-10 py-3">Название</th>
			</tr>
		</thead>

		<tbody>
			{#each data.categories as category (category.id)}
				<tr class="border-b last:border-none">
					<td
						class="text-slate-500 py-2 pl-10 rounded-lg hover:text-blue-700 hover:bg-slate-200 cursor-pointer text-lg"
					>
						<a class="block" href="/admin/categories/{category.id}">{category.name}</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
