<script>
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { goto } from '$app/navigation';

	const currentPath = derived(page, ($page) => $page.url.pathname);

	$: isActive = (path) => $currentPath === path;

	// let isSidebarOpen = true;

	// const toggleSidebar = () => {
	//     isSidebarOpen = !isSidebarOpen;
	//   };
</script>

<!-- <button on:click={toggleSidebar} class="fixed top-4 left-4 bg-blue-500 text-white p-2 rounded">
    {isSidebarOpen ? 'Скрыть панель' : 'Показать панель'}
  </button> -->

<div class="fixed">
	<aside class="w-72 h-screen shadow-lg pt-10 pl-4 pr-4">
		<ul>
			<li>
				<details open class="mb-2">
					<summary class="cursor-pointer text-lg list-none font-medium">Категории</summary>
					<ul class=" mt-2 text-slate-500">
						<li class="hover:underline">
							<div
								class={$currentPath === '/admin/categories/new'
									? 'bg-slate-200  rounded-lg cursor-pointer text-black p-2'
									: 'cursor-pointer p-2'}
								on:click={() => goto('/admin/categories/new')}
							>
								Добавление категории
							</div>
						</li>
						<li class=" hover:underline">
							<div
								class={$currentPath === '/admin/categories/list'
									? 'bg-slate-200 rounded-lg cursor-pointer text-black p-2'
									: 'cursor-pointer p-2'}
								on:click={() => goto('/admin/categories/list')}
							>
								Список категорий
							</div>
						</li>
					</ul>
				</details>
				<details open class="mb-2">
					<summary class="cursor-pointer font-medium text-lg list-none">Теги</summary>
					<ul class=" mt-2 text-slate-500">
						<li class="hover:underline">
							<div
								class={$currentPath === '/admin/tags/new'
									? 'bg-slate-200 rounded-lg cursor-pointer text-black p-2'
									: 'cursor-pointer p-2'}
								on:click={() => goto('/admin/tags/new')}
							>
								Добавление тегов
							</div>
						</li>
						<li class="hover:underline">
							<div
								class={$currentPath === '/admin/tags/list'
									? 'bg-slate-200  rounded-lg cursor-pointer text-black p-2'
									: 'cursor-pointer p-2'}
								on:click={() => goto('/admin/tags/list')}
							>
								Список тегов
							</div>
						</li>
					</ul>
				</details>
				<details open class="mb-2">
					<summary class="cursor-pointer font-medium text-lg list-none">Товары</summary>
					<ul class=" mt-2 text-slate-500">
						<li class="hover:underline">
							<div
								class={$currentPath === '/admin/products/new'
									? 'bg-slate-200  rounded-lg cursor-pointer text-black p-2'
									: 'cursor-pointer p-2'}
								on:click={() => goto('/admin/products/new')}
							>
								Добавление товара
							</div>
						</li>
						<li class="hover:underline">
							<div
								class={$currentPath === '/admin/products/list'
									? 'bg-slate-200  rounded-lg cursor-pointer text-black p-2'
									: 'cursor-pointer p-2'}
								on:click={() => goto('/admin/products/list')}
							>
								Список товаров
							</div>
						</li>
						<li class="hover:underline">
							<div
								class={$currentPath === '/admin/products/archive'
									? 'bg-slate-200  rounded-lg cursor-pointer text-black p-2'
									: 'cursor-pointer p-2'}
								on:click={() => goto('/admin/products/archive')}
							>
								Неопубликованные товары
							</div>
						</li>
					</ul>
				</details>
			</li>
		</ul>
	</aside>
</div>
