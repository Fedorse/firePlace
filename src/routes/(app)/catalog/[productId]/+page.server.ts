import { db } from '$lib/data/db.server.js';
import { eq, lt, gt, asc, desc } from 'drizzle-orm';
import { products } from '$lib/data/schema.js';

export const load = async ({ params, parent }) => {
	const [product, parentData, previousProduct, nextProduct] = await Promise.all([
		db.query.products.findFirst({
			where: eq(products.id, Number(params.productId)),
			with: {
				category: true,
				productTags: {
					with: {
						tag: true
					}
				}
			}
		}),
		parent(),
		db.query.products.findFirst({
			where: lt(products.id, Number(params.productId)),
			with: {
				category: true,
				productTags: {
					with: {
						tag: true
					}
				}
			},
			orderBy: desc(products.id)
		}),
		db.query.products.findFirst({
			where: gt(products.id, Number(params.productId)),
			with: {
				category: true,
				productTags: {
					with: {
						tag: true
					}
				}
			},
			orderBy: asc(products.id)
		})
	]);

	return { product, previousProduct, nextProduct, ...parentData };
};
