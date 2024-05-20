<script>
	export let value = '';
	export let name;
	export let label;
	export let placeholder;
	export let required = false;
</script>

<label class="label text-base font-medium" for={name}>{label}</label>
<input
	type="text"
	class="mt-1 block focus:outline-none w-full rounded-lg border border-slate-300 bg-slate-50 p-2 focus:border-slate-500 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
	bind:value
	{name}
	{placeholder}
	{required}
/>
