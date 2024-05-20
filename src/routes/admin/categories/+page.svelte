<script>
	import { BASE_URL } from '$lib/utils/environment';
	import AdminLink from '$lib/components/admin/AdminLink.svelte';
</script>

<div class="flex flex-col">
	<AdminLink url="/admin/categories/new" text="Добавление новой категории" />
	<AdminLink url="/admin/categories/list" text="Список созданных категории" />
</div>
