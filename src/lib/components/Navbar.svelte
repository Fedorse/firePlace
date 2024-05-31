<script>
	import { goto } from '$app/navigation';
	import { BASE_URL } from '$lib/utils/environment';
	import LanguageSwitcher from './LanguageSwitcher.svelte';

	const goToContacts = () => {
		goto(BASE_URL + '#contacts');
	};
</script>

<nav
	class="border-b border-2 text-black w-full flex text-4xl justify-between items-center cursor-pointer px-20"
>
	<div on:click={() => goto(BASE_URL)}>
		<img src="assets/logo.svg" alt="" class=" w-24 h-24" />
	</div>
	<div class="flex gap-5 text-zinc-400">
		<LanguageSwitcher />
		<p class="text-xl border-r pr-2 border-orange-200 hover:text-black" on:click={goToContacts}>
			Contacts
		</p>

		<p class="text-xl border-r pr-2 border-orange-200 hover:text-black transition">Your cart</p>
		<p class="text-xl border-r pr-2 border-orange-200 hover:text-black transition">About us</p>
	</div>
</nav>
