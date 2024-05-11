import type { Actions } from './$types';
import { db } from '$lib/data/db.server';
import { categories, product } from '$lib/data/schema';
import { eq } from 'drizzle-orm';


export const load = async ({parent}) => {
    const [arhivedProducts, parentData] = await Promise.all([
        db.query.product.findMany({
            where: eq(product.published, true),
            // with: {
            //     categories: true,
            // },
          }),
          parent(),
        ]);
    return {arhivedProducts, ...parentData}    
}

export const actions: Actions = {
    unpublishProduct: async ({request}) => {
        try {
            const formData = await request.formData()
            const id = Number(formData.get('id'))
            await db.update(product)
                    .set({published: false})
                    .where(eq(product.id, id))
            return { success: true, message: "Product was successfully unpublished."}
        } catch (error) {
            console.error('Error unpublishing product:', error);
            return { success: false, message: "Failed to unpublish the product." };
        }
    }
}
