<script>
    import {enhance} from '$app/forms'
    export let data
    let forms = {}
</script>

<h3 class="">Архив неопубликованных товаров</h3>

<table>
    <thead>
        <tr>
            <th>Название</th>
            <th>В архиве</th>
        </tr>
    </thead>
<tbody>
    {#each data.arhivedProducts as  product (product.id)}
        <tr>
            <td>
                {product.name}
            </td>
            <td class="flex justify-center">
                <form
                    use:enhance={() =>
                        async ({ update , action }) => {
                            await update({ reset: false });
                        }}
                    action="?/publishProduct"
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
