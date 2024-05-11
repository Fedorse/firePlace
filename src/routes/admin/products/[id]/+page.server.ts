import { db } from '$lib/data/db.server';
import { eq } from 'drizzle-orm';
import { product } from '$lib/data/schema';
import { saveImage } from '$lib/utils/files';
import type { Actions } from './$types';


export const load = async ({params, parent}) => {
    const productEqId = parseInt(params.id)

    const [productId, parentData] = await Promise.all([
            db.query.product.findFirst({
                where: eq( product.id, productEqId)}),
                parent()
    ])
    return {productId, ...parentData}
}


export const actions: Actions = {
    updateProduct: async ({request}) => {
        const formData = await request.formData()

        const id = Number(formData.get('id'))
        const productId = await db.query.product.findFirst({
                        where: eq(product.id, id)})

        if(!productId) {
            throw new Error('Product not found')
        }

        const updateFields = {}

        const fields = ['name','short_description', 'description', 'price', 'sortOrder']

        fields.forEach( field => {
            const formValue = formData.get(field)
            if(formValue !== null) {
                updateFields[field] = formValue
            }
        })

        const imgFile = formData.get('image');

        if (imgFile && imgFile.size > 0) {
            updateFields.imgUrl = await saveImage(imgFile);
        } else {
            updateFields.imgUrl = productId.imgUrl;
        }
        try {
            const updatedProduct = await db.update(product) 
                .set(updateFields)
                .where(eq(product.id, id))
                .returning(); 

            return { success: true, productId: updatedProduct };
        } catch (error) {
            return { success: false, error: error.message };
        }
    },
    unpublishProduct: async({request}) => {
        try {
            const formData = await request.formData()
            const id = Number(formData.get('id'))
            await db.update(product)
                    .set({published : false})
                    .where(eq(product.id, id))
            return { success: true, message: "Product was successfully unpublished."}
        } catch(error) {
            console.error('Error unpublishing product:', error);
            return { success: false, message: "Failed to unpublish the product." };
        }
    },
    publishProduct: async({request}) => {
        try {
            const formData = await request.formData()
            const id = Number(formData.get('id'))
            await db.update(product)
                    .set({published : true})
                    .where(eq(product.id, id))
            return { success: true, message: "Product was successfully published."}
        } catch(error) {
            console.error('Error publishing product:', error);
            return { success: false, message: "Failed to publish the product." };
        }
    },
        deleteProduct: async({request}) => {
        try {
            const formData = await request.formData()
            const id = Number(formData.get('id'))
            await db.delete(product).where(eq(product.id, id));
            return { success: true, message: "Product was successfully delete."}
        } catch(error) {
            console.error('Error publishing product:', error);
            return { success: false, message: "Failed to delete the product." };
        }
    }
}