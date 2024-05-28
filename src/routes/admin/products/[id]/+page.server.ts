import { db } from '$lib/data/db.server';
import { eq } from 'drizzle-orm';
import { products, productTags, productColors } from '$lib/data/schema';
import { saveImage } from '$lib/utils/files';
import type { Actions } from './$types';

export const load = async ({ params, parent }) => {
	const [product, parentData] = await Promise.all([
		db.query.products.findFirst({
			where: eq(products.id, Number(params.id)),
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
		parent()
	]);
	return { product, ...parentData };
};

export const actions: Actions = {
	updateProduct: async ({ request }) => {
		const formData = await request.formData();

		const id = Number(formData.get('id'));
		const productId = await db.query.products.findFirst({
			where: eq(products.id, id)
		});

		if (!productId) {
			throw new Error('Product not found');
		}

		const updateFields = {};

		const fields = ['name', 'short_description', 'description', 'price', 'sortOrder', 'sizes'];

		fields.forEach((field) => {
			const formValue = formData.get(field);
			if (formValue !== null) {
				updateFields[field] = formValue;
			}
		});

		const imgFile = formData.get('image');

		if (imgFile && imgFile.size > 0) {
			updateFields.imgUrl = await saveImage(imgFile);
		} else {
			updateFields.imgUrl = productId.imgUrl;
		}
		try {
			const updatedProduct = await db
				.update(products)
				.set(updateFields)
				.where(eq(products.id, id))
				.returning();

			await db.delete(productTags).where(eq(productTags.productId, id));

			const product_tags = formData.getAll('product_tags').map(Number);
			await db.insert(productTags).values(
				product_tags.map((tagId) => ({
					productId: id,
					tagId
				}))
			);

			await db.delete(productColors).where(eq(productColors.productId, id));

			const product_colors = formData.getAll('product_colors').map(Number);
			await db.insert(productColors).values(
				product_colors.map((colorId) => ({
					productId: id,
					colorId
				}))
			);

			return { success: true, productId: updatedProduct };
		} catch (error) {
			return { success: false, error: error.message };
		}
	},
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
	},
	publishProduct: async ({ request }) => {
		try {
			const formData = await request.formData();
			const id = Number(formData.get('id'));
			await db.update(products).set({ published: true }).where(eq(products.id, id));
			return { success: true, message: 'Product was successfully published.' };
		} catch (error) {
			console.error('Error publishing product:', error);
			return { success: false, message: 'Failed to publish the product.' };
		}
	},
	deleteProduct: async ({ request }) => {
		try {
			const formData = await request.formData();
			const id = Number(formData.get('id'));
			await db.delete(products).where(eq(products.id, id));
			return { success: true, message: 'Product was successfully delete.' };
		} catch (error) {
			console.error('Error publishing product:', error);
			return { success: false, message: 'Failed to delete the product.' };
		}
	}
};
