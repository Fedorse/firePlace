<script>
	export let data;
</script>

<h1 class="mb-10 pl-10 text-2xl font-medium">Добавленные категории</h1>

<div class="text-lg min-w-full rounded-lg overflow-hidden">
	<table class="text-lg min-w-96 rounded-lg overflow-hidden shadow-lg">
		<thead class="text-xl bg-slate-200 border-slate-300 border">
			<tr>
				<th class="text-md font-semibold text-left pl-10 py-3">Название</th>
			</tr>
		</thead>

		<tbody>
			{#each data.categories as category (category.id)}
				<tr class="border-slate-300 border">
					<td
						class="text-slate-500 py-4 pl-10 rounded-lg cursor-pointer text-lg hover:text-black hover:bg-slate-200"
					>
						<a class="block" href="/admin/categories/{category.id}">{category.name}</a>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
