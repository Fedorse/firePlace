<script>
	import CheckBox from '$lib/components/icons/CheckBox.svelte';
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

<h3 class="text-base">Теги</h3>
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
				class="w-5 h-5 border border-slate-500 rounded-lg shadow-md peer-checked:bg-slate-600 peer-checked:border-teal-700 flex items-center justify-center"
			>
				<CheckBox />
			</div>
			<div class="flex items-center">
				<span
					class={`p-1 ${selectedTags.includes(tag.id) ? 'text-black font-semibold' : 'text-slate-400'}`}
				>
					{tag.name}
				</span>
			</div>
		</label>
	{/each}
</div>
