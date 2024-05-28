<script>
	import { BASE_URL } from '$lib/utils/environment';
	import AdminLink from '$lib/components/admin/AdminLink.svelte';
</script>

<div class="flex flex-col gap-2 pl-10">
	<AdminLink url="/admin/colors/new" text="Добавление нового цвета" />
	<AdminLink url="/admin/colors/list" text="Список добавленных цветов" />
</div>
