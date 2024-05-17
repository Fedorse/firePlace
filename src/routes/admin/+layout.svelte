<script>
	import Sidebar from '$lib/components/admin/Sidebar.svelte';
	import AdminNavbar from '$lib/components/admin/AdminNavbar.svelte';
</script>

<AdminNavbar />

<div class="flex bg-slate-100 min-h-screen">
	<Sidebar />

	<main class="flex-1 ml-72 p-4 mt-16">
		<slot />
	</main>
</div>
