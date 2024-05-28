<script>
	import CheckBox from '$lib/components/icons/CheckBox.svelte';
	export let colors;
	export let selectedColors;

	function toggleColor(colorId, checked) {
		if (checked) {
			selectedColors = [...selectedColors, colorId];
		} else {
			selectedColors = selectedColors.filter((id) => id !== colorId);
		}
	}
</script>

<h3 class="text-base">Цвета</h3>
<div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
	{#each colors as color (color.id)}
		<label class="flex items-center gap-2 cursor-pointer">
			<input
				type="checkbox"
				class="hidden peer"
				name="product_colors"
				value={color.id}
				checked={selectedColors.includes(color.id)}
				on:change={(e) => toggleColor(color.id, e.target.checked)}
			/>
			<div class="w-5 h-5 rounded-full" style="background-color: {color.hex};"></div>
			<div
				class="w-5 h-5 border border-slate-500 rounded-lg shadow-md peer-checked:bg-slate-600 peer-checked:border-teal-700 flex items-center justify-center"
			>
				<CheckBox />
			</div>
			<span
				class={`p-1 ${selectedColors.includes(color.id) ? 'text-black font-semibold' : 'text-slate-400'}`}
			>
				{color.name}
			</span>
		</label>
	{/each}
</div>
