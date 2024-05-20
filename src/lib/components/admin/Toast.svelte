<script>
	import { toasts } from '$lib/stores/toasts';
	import ToastEventWarn from '$lib/components/icons/ToastEventWarn.svelte';
	import ToastEventInfo from '$lib/components/icons/ToastEventInfo.svelte';

	export let id;
	export let message;
	export let type = 'info';

	console.log('ID', id);
</script>

{#if type === 'info'}
	<div
		class="flex items-center p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800"
		role="alert"
		on:click={() => toasts.remove(id)}
	>
		<ToastEventInfo />
		<span>{message}</span>
	</div>
{:else if type === 'error'}
	<div
		class="flex items-center p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
		role="alert"
		on:click={() => toasts.remove(id)}
	>
		<ToastEventWarn />

		<span>{message}</span>
	</div>
{:else}
	<div
		class="flex items-center p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
		role="alert"
		on:click={() => toasts.remove(id)}
	>
		<ToastEventWarn />

		<span>{message}</span>
	</div>
{/if}
