<script>
import { enhance } from '$app/forms';

export let data
    
let selectedTab = 'tab1'

</script>
  
<h1 class="text-center text-3xl font-bold">form edit product</h1>


<div class="flex flex-col w-full">
    <form 
        method="POST" 
        action="?/addProduct" 
        use:enhance 
        class="flex flex-col"
        enctype="multipart/form-data"
        >
        <input type="hidden" name="id" value={data.productId.id} />


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
          
          <label for="tab2" class="inline-block cursor-pointer p-4   text-center text-gray-700 bg-white rounded-t-lg border-b-2  " aria-label="Дополнительная информация">local</label>
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
                bind:value="{data.productId.name}"
                >

                <label for="description">description </label>
                <textarea 
                class="rounded-lg p-2"
                name="description" 
                id="description"
                placeholder="input desc text"
                bind:value={data.productId.description}
                ></textarea>

                <label for="short_description">short description </label>
                <textarea 
                class="rounded-lg p-2"
                name="short_description" 
                id="short_description"
                placeholder="input desc text"
                bind:value={data.productId.short_description}
                ></textarea>

                <label for="price">price product</label>
                <input 
                class="rounded-lg p-2"
                type='number'
                name='price'
                id='price'
                placeholder="price"
                required
                bind:value={data.productId.price}

                >
              </div>
            </div>
            <div class="{selectedTab === 'tab2' ? 'block' : 'hidden'}">
              <div class="flex flex-col gap-5">
                <p>tab test 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    <div class="items-center flex justify-center">
        <button
        formaction="?/updateProduct"
        class="bg-blue-300 w-44 text-white font-semibold p-2 rounded-lg  "
        >
        update product
        </button>
        {#if data.productId.published}
        <button
        formaction="?/unpublishProduct"
        class="bg-blue-300 w-44 text-white font-semibold p-2 rounded-lg  "
        >
        unpublish Product
        </button>
        {:else}
        <button
        formaction="?/publishProduct"
        class="bg-blue-300 w-44 text-white font-semibold p-2 rounded-lg  "
        >
        publish Product
        </button>
        {/if}
        <button
        formaction="?/deleteProduct"
        class="bg-blue-300 w-44 text-white font-semibold p-2 rounded-lg  "
        >
        delete product
        </button>
    </div>
    </form>
</div>

 