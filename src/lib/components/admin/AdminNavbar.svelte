<script>
	import { goto } from '$app/navigation';
</script>

<nav
	class="border-b-2 border-slate-200 w-full flex text-4xl items-center pl-4 h-24 p-1 bg-slate-100 cursor-pointer"
>
	<div on:click={() => goto('/admin/categories/new')}>
		<img src="/assets/logo.svg" alt="Logo" class="w-24 h-24" />
	</div>
</nav>
