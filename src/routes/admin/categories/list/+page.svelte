<script>
    export let data
</script>

<h3 class="mb-10 text-xl text-center sm:text-left sm:text-3xl font-bold text-secondary">
	Добавленные категории
</h3>

<table class="table">
	<thead>
		<tr>
		<th class="text-md">Название</th>
		</tr>
	</thead>

	<tbody>
		{#each data.categories as category (category.id)}
			<tr
				class=" select-none hover:bg-primary hover:text-primary-content text-lg sm:text-2xl cursor-pointer"
			>
				<td>
					{category.name}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
