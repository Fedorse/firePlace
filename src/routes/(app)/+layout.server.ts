import { db } from '$lib/data/db.server';

export const load = async () => {
	const [products, categories, tags, colors] = await Promise.all([
		db.query.products.findMany({
			with: {
				category: true,
				productTags: {
					with: {
						tag: true
					}
				},
				productColors: {
					with: {
						color: true
					}
				}
			}
		}),
		db.query.categories.findMany(),
		db.query.tags.findMany(),
		db.query.colors.findMany()
	]);
	return { products, categories, tags, colors };
};
