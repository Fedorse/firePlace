<script>
	import EditableProductForm from '$lib/components/admin/EditableProductForm.svelte';
	import AdminTitle from '$lib/components/admin/AdminTitle.svelte';
	export let data;
</script>

<AdminTitle text="Форма редактирования продукта" />

<EditableProductForm
	colors={data.colors}
	product={data.product}
	tags={data.tags}
	categories={data.categories}
/>
