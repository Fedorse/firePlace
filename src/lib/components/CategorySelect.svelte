<script>
	export let categories = [];
	export let selectedCategory;
</script>

<label class="label text-xl" for="category_id">Категория</label>
<select class="select select-bordered w-full" name="categories_id" bind:value={selectedCategory}>
	{#each categories as category}
		<option value={category.id}>{category.name}</option>
	{/each}
</select>
