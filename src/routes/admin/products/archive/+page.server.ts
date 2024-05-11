import type { Actions } from './$types';
import { db } from '$lib/data/db.server';
import { product } from '$lib/data/schema';
import { eq } from 'drizzle-orm'


export const load = async () => {
    const arhivedProducts = await db.query.product.findMany({
        where: eq(product.published, false)})
        
    return { arhivedProducts }
}

export const actions: Actions = {
    publishProduct: async ({request}) => {
        try {
            const formData = await request.formData()
            const id = Number(formData.get('id'))
            await db.update(product)
                    .set({published: true})
                    .where(eq(product.id, id))
            return { success: true, message: "Product was successfully published."}
        } catch (error) {
            console.error('Error publishing product:', error);
            return { success: false, message: "Failed to publish the product." };
        }
    }
}
