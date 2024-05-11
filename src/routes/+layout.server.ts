import { db } from '$lib/data/db.server';

export const load = async () => {
    const [products, categories] = await Promise.all([
        db.query.product.findMany(),
        db.query.categories.findMany()
    ]) 
    return {products, categories}
}


