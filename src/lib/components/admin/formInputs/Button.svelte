<script>
	import Loading from '$lib/components/icons/Loading.svelte';
	export let formaction;
	export let text = 'clik';
	export let variant = 'bg-slate-800';
	export let variantHover = 'bg-slate-900';
	export let isLoading = false;
</script>

<button
	{formaction}
	class="w-full sm:w-48 text-white p-2 {variant} hover:{variantHover} rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
	disabled={isLoading}
>
	{#if isLoading}
		<div class="flex place-content-center gap-2">
			<Loading />
			<span> Загрузка...</span>
		</div>
	{:else}
		{text}
	{/if}
</button>
