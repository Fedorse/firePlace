<script>
	import Sidebar from '$lib/components/admin/Sidebar.svelte';
	import AdminNavbar from '$lib/components/admin/AdminNavbar.svelte';
	import ToastContainer from '$lib/components/admin/ToastContainer.svelte';
</script>

<ToastContainer />
<AdminNavbar />

<div class="flex bg-slate-100 min-h-screen">
	<Sidebar />

	<main class="flex-1 ml-72 p-4 pb-10 mt-10">
		<slot />
	</main>
</div>
