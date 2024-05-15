<script>
  import Sidebar from '$lib/components/Sidebar.svelte'
  import AdminNavbar from '$lib/components/AdminNavbar.svelte'
</script>


<AdminNavbar />

<div class="flex bg-slate-100 min-h-screen ">
  <Sidebar />

  <main class="flex-1 ml-72 p-4 mt-16">
    <slot />
  </main>
</div>


