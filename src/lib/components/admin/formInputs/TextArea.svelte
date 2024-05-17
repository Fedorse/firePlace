<script>
	export let value = '';
	export let name;
	export let label;
	export let placeholder;
	export let required = false;
</script>

<label class="text-lg font-medium text-gray-900" for={name}>{label}</label>
<textarea
	class="mt-1 block w-full rounded-md border border-gray-300 bg-slate-200 p-2 min-h-32"
	bind:value
	{name}
	{placeholder}
	{required}
></textarea>
