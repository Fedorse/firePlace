<script>
    import {enhance} from '$app/forms'
    export let data
    let forms = {}
    console.log(data.arhivedProducts)
    

</script>

<h3 class="">Добавленные товары</h3>

<table>
    <thead>
        <tr>
            <th>Название</th>
            <th>Категория</th>
            <th>Опубликован</th>
        </tr>
    </thead>


<tbody>
    {#each data.arhivedProducts as  product (product.id)}
        <tr>
            <td>
                {product.name}
            </td>
            <td>

            </td>

            <td class="flex justify-center">
                <form
                    use:enhance={() =>
                        async ({ update }) => {
                            await update({ reset: false });
                        }}
                    action="?/unpublishProduct"
                    method="POST"
                    bind:this={forms[product.id]}
                >
                    <input type="hidden" value={product.id} name="id" />
                    <input
                        type="checkbox"
                        checked="checked"
                        class=""
                        on:change={(e) => {
                            forms[product.id].requestSubmit();
                        }}
                    />
                </form>
            </td>
        </tr>
    {/each}
</tbody>
</table>
