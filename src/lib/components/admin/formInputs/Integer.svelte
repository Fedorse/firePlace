<script>
	export let value = '';
	export let step = 1;
	export let name;
	export let label;
	export let placeholder;
	export let required = false;
</script>

<label class="label text-base" for={name}>{label}</label>
<input
	type="number"
	class="mt-1 block w-full rounded-lg border border-gray-300 bg-slate-50 p-2 focus:outline-none focus:border-slate-500 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
	bind:value
	{step}
	{name}
	{placeholder}
	{required}
/>
