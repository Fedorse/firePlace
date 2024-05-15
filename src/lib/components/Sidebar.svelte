<script>
import { page } from '$app/stores';
import { BASE_URL } from '$lib/utils/environment'
import { derived } from 'svelte/store';

const currentPath = derived(page, $page => $page.url.pathname);

$: isActive = (path) => $currentPath === path;

// let isSidebarOpen = true; 

// const toggleSidebar = () => {
//     isSidebarOpen = !isSidebarOpen;
//   };


</script>
  
<!-- <button on:click={toggleSidebar} class="fixed top-4 left-4 bg-blue-500 text-white p-2 rounded">
    {isSidebarOpen ? 'Скрыть панель' : 'Показать панель'}
  </button> -->
  
  <div class="fixed ">
    <aside
      class='w-72 h-screen bg-gray-100 shadow-md pt-10 pl-7'>
            <ul >
                <li>
                    <details open class="mb-4">
                        <summary class="cursor-pointer font-semibold text-lg py-2 list-none ">Категории</summary>
                            <ul class=" mt-2 text-slate-500">
                              <li class="m-2 hover:underline">
                                <a class={$currentPath === '/admin/categories/new' ? 'bg-slate-200 p-2 rounded-lg' : ''} href="/admin/categories/new"> Добавление категории</a> 
                                </li>
                              <li class="m-2 hover:underline ">
                                <a class={$currentPath === '/admin/categories/list' ? 'bg-slate-200 p-2 rounded-lg' : ''}  href="/admin/categories/list">Список категорий</a>
                            </li>
                            </ul>
                      </details>
                    <details open  class="mb-4 ">
                        <summary class="cursor-pointer font-semibold text-lg py-2 list-none">Теги</summary>
                        <ul class=" mt-2 text-slate-500">
                            <li class="m-2 hover:underline">
                                <a class={$currentPath === '/admin/tags/new' ? 'bg-slate-200 p-2 rounded-lg' : ''} href="{BASE_URL}/admin/tags/new">Добавление тегов</a>
                            </li>
                            <li class="m-2 hover:underline">
                                <a class={$currentPath === '/admin/tags/list' ? 'bg-slate-200 p-2 rounded-lg' : ''} href="{BASE_URL}/admin/tags/list">Список тегов</a>
                            </li>
                        </ul>
                    </details>
                    <details open class="mb-4 ">
                        <summary class="cursor-pointer font-semibold text-lg py-2 list-none">Товары</summary>
                        <ul class=" mt-2 text-slate-500">
                            <li class="m-2 hover:underline">
                                <a class={$currentPath === '/admin/products/new' ? 'bg-slate-200 p-2 rounded-lg' : ''} href="{BASE_URL}/admin/products/new">Добавление товара</a>
                            </li>
                            <li class="m-2 hover:underline">
                                <a class={$currentPath === '/admin/products/list' ? 'bg-slate-200 p-2 rounded-lg' : ''} href="{BASE_URL}/admin/products/list">Список товаров</a>
                            </li>
                            <li class="m-2 hover:underline">
                                <a class={$currentPath === '/admin/products/archive' ? 'bg-slate-200 p-2 rounded-lg' : ''} href="{BASE_URL}/admin/products/archive">Неопубликованные товары</a>
                            </li>
                        </ul>
                    </details>
                </li>
            </ul>
            <div></div>
    </aside>
  </div>
  

