<!-- <script>
    import { enhance } from '$app/forms';
    export let form;
  </script>
  
  <form method="POST" action="?/addProduct" use:enhance>
    <input type="text" name="name" placeholder="Название" required />
    <input type="text" name="shortDescription" placeholder="Краткое описание" required />
    <textarea name="description" placeholder="Описание"></textarea>
    <input type="text" name="imgUrl" placeholder="URL изображения" />
    <input type="text" name="videoUrl" placeholder="URL видео" />
    <input type="number" name="price" placeholder="Цена" required />
    <input type="number" name="sortOrder" placeholder="Порядок сортировки" />
    <input type="number" name="categoryId" placeholder="ID категории" />
    <button type="submit">Добавить продукт</button>
  </form>
  
  {#if form?.success}
    <p>Продукт успешно добавлен</p>
  {:else if form?.error}
    <p>{form.error}</p>
  {/if} -->
<!-- 
  <script>
    export let data
    const products = data.productTable
  </script>
<form method="POST" action="?/addProduct" >
    <input  type="text" name="name">
    <input type="text" name="description">
    <button>Add product</button>
</form>

{#each products as product }
    <div>
        <h1 class="text-2xl">UserName:{product.name} (id {product.id})</h1>
        <p class="text-2xl ">Description: {product.description}</p>
        <form method="POST" action="?/deleteProduct">
            <input type="hidden" name="id" value={product.id} />
            <button type="submit">Delete</button>
          </form>
    </div>
{/each} -->