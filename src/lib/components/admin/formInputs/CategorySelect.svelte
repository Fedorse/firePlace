<script>
	export let categories = [];
	export let selectedCategory;
</script>

<label class="text-base" for="categories_id">Категория</label>
<select
	class="w-full p-2 border border-slate-300 rounded-lg bg-slate-50 text-black focus:outline-none focus:border-slate-500 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
	name="categories_id"
	bind:value={selectedCategory}
>
	{#each categories as category}
		<option value={category.id}>{category.name}</option>
	{/each}
</select>
