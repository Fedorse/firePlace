<script>
	export let tags;
	export let selectedTags;

	function handleTagChange(tagId, checked) {
		if (checked) {
			selectedTags = [...selectedTags, tagId];
		} else {
			selectedTags = selectedTags.filter((id) => id !== tagId);
		}
	}
</script>

<h3 class="text-2xl">Теги</h3>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-2 p-4">
	{#each tags as tag (tag.id)}
	<label class="flex items-center gap-2 cursor-pointer">
		<input
				type="checkbox"
				class=""
				name="product_tags"
				value={tag.id}
				checked={selectedTags.includes(tag.id)}
				on:change={(e) => handleTagChange(tag.id, e.target.checked)}
			/>
			<div class="flex items-center ">
				<span class={`p-1 ${selectedTags.includes(tag.id) ? 'text-primary' : 'text-base'}`}>
                    {tag.name}
				</span>
				<span class="text-lg">{tag.name}</span>
			  </div>
		</label>
	{/each}
</div>
