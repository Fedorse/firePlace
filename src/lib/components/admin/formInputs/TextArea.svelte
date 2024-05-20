<script>
	export let value = '';
	export let name;
	export let label;
	export let placeholder;
	export let required = false;
</script>

<label class="text-base font-medium text-black" for={name}>{label}</label>
<textarea
	class="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2 min-h-32 focus:outline-none focus:border-slate-500 focus:ring focus:ring-slate-200 focus:ring-opacity-50"
	bind:value
	{name}
	{placeholder}
	{required}
></textarea>
