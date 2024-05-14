<script>
import { enhance } from '$app/forms';
import CategorySelect from '$lib/components/CategorySelect.svelte';
import Tags from '$lib/components/Tags.svelte';

export let data

let selectedCategory;
let selectedTags = [];

let categories = data.categories
let tags = data.tags


    

 let selectedTab = 'tab1'

  </script>
  
<h1 class="text-center text-3xl font-bold">form add new product</h1>


<div class="flex flex-col w-full">
    <form 
        method="POST" 
        action="?/addProduct" 
        use:enhance 
        class="flex flex-col"
        enctype="multipart/form-data"
        >

    <div class="w-full flex ">
        <div class="flex-1 h-64 bg-slate-100">
          <input 
            type="file"
            id = ''
            name="image"
            accept="image/*"
          />
        </div>
        <div class="flex-1 h-64">video</div>
    </div>
    <div class="p-0 sm:p-4 bg-gray-400">
        <div class="w-full" role="tablist">
        <label for="tab1" class="inline-block cursor-pointer p-4  text-center text-gray-700 bg-white rounded-t-lg border-b-2 border-transparent  " aria-label="Основная информация">main info</label>
          <input 
            type="radio" 
            id="tab1" 
            name="newProduct" 
            class="hidden" 
            role="tab"
            checked
            bind:group={selectedTab} 
            value="tab1"  />
          
          <label for="tab2" class="inline-block cursor-pointer p-4 text-center text-gray-700 bg-white rounded-t-lg border-b-2  " aria-label="Дополнительная информация">local</label>
          <input 
            type="radio" 
            id="tab2" 
            name="newProduct" 
            class="hidden" 
            role="tab"
            bind:group={selectedTab} 
            value="tab2" />
      
          <div class="tab-content bg-base-100 border-base-300 rounded-b-lg p-6">
            <div class="{selectedTab === 'tab1' ? 'block' : 'hidden'}">
              <div class="flex flex-col gap-5">
                <label for="name">name product</label>
                <input 
                class="rounded-lg p-2"
                type="text"
                name='name'
                id='name'
                placeholder="input name product"
                >

                <label for="description">description </label>
                <textarea 
                class="rounded-lg p-2"
                name="description" 
                id="description"
                placeholder="input desc text"
                ></textarea>

                <label for="short_description">short description </label>
                <textarea 
                class="rounded-lg p-2"
                name="short_description" 
                id="short_description"
                placeholder="input desc text"
                ></textarea>

                <label for="price">price product</label>
                <input 
                class="rounded-lg p-2"
                type='number'
                name='price'
                id='price'
                placeholder="price"
                required
                >
              </div>
              <CategorySelect {categories} bind:selectedCategory/>
              <Tags {tags} bind:selectedTags />

            </div>
            <div class="{selectedTab === 'tab2' ? 'block' : 'hidden'}">
              <div class="flex flex-col gap-5">
                <p>tab test 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    <button
      type="submit"
      class="bg-blue-300 text-white font-semibold p-2 rounded-lg "
    >
        Add product
    </button>
    </form>
</div>

 