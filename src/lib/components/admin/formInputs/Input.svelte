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
	class="mt-1 block w-full rounded-lg border border-slate-300 bg-slate-50 p-2"
	bind:value
	{name}
	{placeholder}
	{required}
/>
