<script>
	import { BASE_URL } from '$lib/utils/environment';
	import { goto } from '$app/navigation';
</script>

<nav class="border-b-2 border-gray-300 w-full flex text-4xl items-center h-20 p-10 bg-gray-100">
	<div on:click={() => goto('/admin/categories/new')}>LOGO</div>
</nav>
