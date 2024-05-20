<script>
	import { toasts } from '$lib/stores/toasts';
	import Toast from './Toast.svelte';
</script>

<div class="fixed top-5 right-5 z-50 flex flex-col space-y-2">
	{#each $toasts as { id, message, type } (id)}
		<Toast {id} {message} {type} />
	{/each}
</div>
