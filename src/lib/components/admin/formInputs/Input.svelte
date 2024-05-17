<script>
	export let value = '';
	export let name;
	export let label;
	export let placeholder;
	export let required = false;
</script>

<label class="label text-lg font-medium text-gray-900" for={name}>{label}</label>
<input
	type="text"
	class="mt-1 block w-full rounded-md border border-gray-300 bg-slate-200 p-2"
	bind:value
	{name}
	{placeholder}
	{required}
/>
