<script>
	import NewProductForm from '$lib/components/admin/NewProductForm.svelte';
	import AdminTitle from '$lib/components/admin/AdminTitle.svelte';
	export let data;
</script>

<AdminTitle text="Форма добавления нового продукта" />

<NewProductForm colors={data.colors} categories={data.categories} tags={data.tags} />
