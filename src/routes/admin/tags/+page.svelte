<script>
	import { BASE_URL } from '$lib/utils/environment';
	import AdminLink from '$lib/components/admin/AdminLink.svelte';
</script>

<div class="flex flex-col">
	<AdminLink url="{BASE_URL}/admin/tags/new" text="Добавление нового тега" />
	<AdminLink url="{BASE_URL}/admin/tags/list" text="Список созданных тегов" />
</div>
