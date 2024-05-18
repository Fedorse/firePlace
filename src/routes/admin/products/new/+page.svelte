<script>
	import NewProductForm from '$lib/components/admin/NewProductForm.svelte';

	export let data;
</script>

<h1 class="text-center text-2xl font-medium mb-10">Форма добавления нового продукта</h1>
<NewProductForm categories={data.categories} tags={data.tags} />
