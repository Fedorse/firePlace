import { db } from '$lib/data/db.server';

export const load = async () => {
	const [products, categories, tags, colors] = await Promise.all([
		db.query.products.findMany(),
		db.query.categories.findMany(),
		db.query.tags.findMany(),
		db.query.colors.findMany()
	]);
	return { products, categories, tags, colors };
};
