import { db } from '$lib/data/db.server';

export const load = async () => {
    const [products, categories, tags] = await Promise.all([
        db.query.products.findMany(),
        db.query.categories.findMany(),
        db.query.tags.findMany()
    ]) 
    return {products, categories, tags}
}


