<script>
	import { BASE_URL } from '$lib/utils/environment';
	import AdminLink from '$lib/components/admin/AdminLink.svelte';
</script>

<div class="flex flex-col gap-2 pl-10">
	<AdminLink url="/admin/products/new" text="Добавление нового продукта" />
	<AdminLink url="/admin/products/list" text="Список созданных продуктов" />
	<AdminLink url="/admin/products/archive" text="Архив продуктов" />
</div>
