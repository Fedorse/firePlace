<script>
	export let categories = [];
	export let selectedCategory;
</script>

<label class="text-lg" for="categories_id">Категория</label>
<select
	class="w-full p-2 border border-gray-300 rounded-lg bg-slate-200 focus:outline-none text-slate-500"
	name="categories_id"
	bind:value={selectedCategory}
>
	{#each categories as category}
		<option value={category.id}>{category.name}</option>
	{/each}
</select>
