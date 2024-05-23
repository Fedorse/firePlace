<script>
	import { filters } from '$lib/stores/filters';
	export let data;
</script>

<div class="justify-around flex text-xl mb-10">
	<div
		class="cursor-pointer text-zinc-500 hover:bg-orange-400 hover:text-white p-2 px-4 rounded-3xl transition-colors duration-300 ease-in-out"
		on:click={filters.reset}
		class:active={$filters.categories.includes('all')}
	>
		All
	</div>
	{#each data.categories as category (category.id)}
		<div
			class="cursor-pointer text-zinc-500 hover:bg-orange-400 hover:text-white p-2 px-4 rounded-3xl transition-colors duration-300 ease-in-out"
			on:click={() => filters.toggleCategory(category.id)}
			class:active={$filters.categories.includes(category.id)}
		>
			{category.name}
		</div>
	{/each}
</div>

<style>
	.active {
		@apply bg-orange-600 text-white rounded-3xl;
	}
</style>
