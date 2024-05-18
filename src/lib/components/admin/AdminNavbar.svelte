<script>
	import { goto } from '$app/navigation';
</script>

<nav
	class="border-b-2 border-slate-200 w-full flex text-4xl items-center h-20 p-10 bg-slate-100 cursor-pointer"
>
	<div on:click={() => goto('/admin/categories/new')}>LOGO</div>
</nav>
