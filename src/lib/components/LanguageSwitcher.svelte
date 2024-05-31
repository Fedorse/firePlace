<script>
	// import { locale } from '$lib/stores/locales';

	// const toggleLocale = () => {
	// 	if ($locale === 'ru') {
	// 		locale.set('en');
	// 	} else {
	// 		locale.set('ru');
	// 	}
	// };
	let language = true;
	const toggleLang = () => {
		language = !language;
	};
</script>

<div class="flex cursor-pointer gap-2" on:click={toggleLang}>
	{#if language}
		<span class="text-black border px-1 py-1 text-sm font-medium rounded-md">En</span>
	{:else}
		<span class="text-black border px-1 py-1 text-sm font-medium rounded-md">Th</span>
	{/if}
</div>
