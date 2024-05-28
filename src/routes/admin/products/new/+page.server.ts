import { db } from '$lib/data/db.server';
import { products, productTags, productColors } from '$lib/data/schema';
import { DEFAULT_PRODUCT_IMAGE } from '$lib/utils/constsImg';
import { saveImage } from '$lib/utils/files';
import { saveVideo } from '$lib/utils/files';
import type { Actions } from './$types';

export const actions: Actions = {
	addProduct: async ({ request }) => {
		const formData = await request.formData();

		const category_id = Number(formData.get('categories_id'));
		const product_tags = formData.getAll('product_tags').map(Number);
		const product_colors = formData.getAll('product_colors').map(Number);
		const name = formData.get('name');
		const short_description = formData.get('short_description');
		const description = formData.get('description');
		const imgFile = formData.get('image');
		const videoFile = formData.get('video');
		const price = Number(formData.get('price'));
		const sortOrder = Number(formData.get('sort_order'));
		const sizes = formData.get('sizes');

		let imgUrl = DEFAULT_PRODUCT_IMAGE;
		let videoUrl = '';

		if (imgFile && imgFile.size > 0) {
			imgUrl = await saveImage(imgFile);
		}
		if (videoFile && videoFile.size > 0) {
			videoUrl = await saveVideo(videoFile);
		}
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
					sortOrder,
					sizes
				})
				.returning();

			await db.insert(productTags).values(
				product_tags.map((tagId) => ({
					productId: newProduct.id,
					tagId
				}))
			);
			await db.insert(productColors).values(
				product_colors.map((colorId) => ({
					productId: newProduct.id,
					colorId
				}))
			);
		} catch (error) {
			console.error('Error inserting product or tags:', error);
		}

		return { success: true };
	}
};
