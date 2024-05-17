import { db } from '$lib/data/db.server';
import { products, productTags } from '$lib/data/schema';
import { DEFAULT_PRODUCT_IMAGE } from '$lib/utils/constsImg';
import { saveImage } from '$lib/utils/files';
import type { Actions } from './$types';

export const actions: Actions = {
	addProduct: async ({ request }) => {
		const formData = await request.formData();

		const category_id = Number(formData.get('categories_id'));
		const product_tags = formData.getAll('product_tags').map(Number);
		const name = formData.get('name');
		const short_description = formData.get('short_description');
		const description = formData.get('description');
		const imgFile = formData.get('image');
		const videoFile = formData.get('video');
		const price = Number(formData.get('price'));
		const sortOrder = Number(formData.get('sort_order'));

		let imgUrl = DEFAULT_PRODUCT_IMAGE;

		if (imgFile && imgFile.size > 0) imgUrl = await saveImage(imgFile);

		try {
			const [newProduct] = await db
				.insert(products)
				.values({
					name,
					category_id,
					short_description,
					description,
					imgUrl,
					videoFile,
					price,
					sortOrder
				})
				.returning();

			await db.insert(productTags).values(
				product_tags.map((tagId) => ({
					productId: newProduct.id,
					tagId
				}))
			);
		} catch (error) {
			console.error('Error inserting product or tags:', error);
		}

		return { success: true };
	}
};
