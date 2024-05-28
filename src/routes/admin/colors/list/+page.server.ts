import { db } from '$lib/data/db.server';
import { colors } from '$lib/data/schema';
import { eq } from 'drizzle-orm';

export const actions = {
	deleteColor: async ({ request }) => {
		try {
			const formData = await request.formData();
			const id = Number(formData.get('id'));

			if (!id) {
				return { success: false, message: 'No color ID provided.' };
			}

			await db.delete(colors).where(eq(colors.id, id));
			return { success: true, message: 'Color was successfully deleted' };
		} catch (error) {
			console.error('Error deleting color:', error);
			return { success: false, message: 'Failed to delete the color.' };
		}
	}
};
