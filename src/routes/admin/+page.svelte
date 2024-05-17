<script>
	import { BASE_URL } from '$lib/utils/environment';
	import AdminLink from '$lib/components/admin/AdminLink.svelte';
</script>

<div class="flex flex-col p-10 gap-4">
    <AdminLink url="{BASE_URL}/admin/categories" text="Категории товаров" />
    <AdminLink url="{BASE_URL}/admin/tags" text="Теги" />
    <AdminLink url="{BASE_URL}/admin/products" text="Продукты" />
</div>

