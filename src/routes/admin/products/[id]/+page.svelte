<script>
	import EditableProductForm from '$lib/components/admin/EditableProductForm.svelte';
	export let data;
</script>

<h1 class="text-center text-2xl font-semibold mb-10">Форма редактирования продукта</h1>

<EditableProductForm product={data.product} tags={data.tags} categories={data.categories} />
