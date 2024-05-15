<script>
  import { BASE_URL } from '$lib/utils/environment'
  import AdminLink from '$lib/components/AdminLink.svelte'
</script>


<div class="flex flex-col">
      <AdminLink url="{BASE_URL}/admin/products/new" text='Добавление нового продукта' />
      <AdminLink url="{BASE_URL}/admin/products/list" text='Список созданных продуктов' />
      <AdminLink url="{BASE_URL}/admin/products/archive" text='Архив продуктов' />
</div>