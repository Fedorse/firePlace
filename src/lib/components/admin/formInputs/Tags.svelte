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

<h3 class="text-lg">Теги</h3>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
	{#each tags as tag (tag.id)}
		<label class="flex items-center gap-2 cursor-pointer">
			<input
				type="checkbox"
				class="hidden peer"
				name="product_tags"
				value={tag.id}
				checked={selectedTags.includes(tag.id)}
				on:change={(e) => handleTagChange(tag.id, e.target.checked)}
			/>
			<div
				class="w-5 h-5 border border-gray-300 rounded-full peer-checked:bg-blue-500 peer-checked:border-blue-500 flex items-center justify-center"
			>
				<svg
					class="w-4 h-4 text-white hidden peer-checked:block"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
					></path>
				</svg>
			</div>
			<div class="flex items-center">
				<span
					class={`p-1 ${selectedTags.includes(tag.id) ? 'text-blue-500 font-bold' : 'text-gray-500'}`}
				>
					{tag.name}
				</span>
				<!-- <span class="text-lg">{tag.name_en}</span> -->
			</div>
		</label>
	{/each}
</div>
