<script>
	export let formaction;
	export let text = 'clik';
	export let variant = 'bg-blue-500';
	export let variantHover = 'bg-blue-600';
</script>

<button
	{formaction}
	class="w-full sm:w-52 text-white p-2 {variant} hover:{variantHover} rounded-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
	>{text}</button
>
