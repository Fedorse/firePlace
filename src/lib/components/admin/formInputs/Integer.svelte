<script>
	export let value = '';
	export let step = 1;
	export let name;
	export let label;
	export let placeholder;
	export let required = false;
</script>

<label class="label text-xl" for={name}>{label}</label>
<input
	type="number"
	class="mt-1 block w-full rounded-md border border-gray-300 bg-slate-200 p-2"
	bind:value
	{step}
	{name}
	{placeholder}
	{required}
/>
