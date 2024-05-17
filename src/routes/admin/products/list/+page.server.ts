import type { Actions } from './$types';
import { db } from '$lib/data/db.server';
import { products } from '$lib/data/schema';
import { eq } from 'drizzle-orm';

export const load = async ({ parent }) => {
	const [arhivedProducts, parentData] = await Promise.all([
		db.query.products.findMany({
			where: eq(products.published, true),
			with: { category: true }
		}),
		parent()
	]);
	return { arhivedProducts, ...parentData };
};

export const actions: Actions = {
	unpublishProduct: async ({ request }) => {
		try {
			const formData = await request.formData();
			const id = Number(formData.get('id'));
			await db.update(products).set({ published: false }).where(eq(products.id, id));
			return { success: true, message: 'Product was successfully unpublished.' };
		} catch (error) {
			console.error('Error unpublishing product:', error);
			return { success: false, message: 'Failed to unpublish the product.' };
		}
	}
};
