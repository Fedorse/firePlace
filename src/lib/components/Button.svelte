<script>
	export let href = '';
	export let text = '';
	export let className = '';
	export let variant = 'filled';
	export let isLink = false;
	export let type = 'button';
</script>

{#if isLink}
	<a
		{href}
		class={`w-48 text-center inline-block p-3 rounded-full transition-colors duration-300 ease-in-out ${variant === 'filled' ? 'bg-orange-600 text-white border-white hover:bg-orange-800' : 'border-2  border-orange-400 text-orange-600 hover:bg-orange-400 hover:text-white'} ${className}`}
	>
		{text}
	</a>
{:else}
	<button
		{type}
		class={`w-48 text-center inline-block p-3 rounded-full transition-colors duration-300 ease-in-out ${variant === 'filled' ? 'bg-orange-600 text-white border-white hover:bg-orange-800' : 'border-2 border-orange-400 text-orange-600 hover:bg-orange-400 hover:text-white'} ${className}`}
	>
		{text}
	</button>
{/if}
