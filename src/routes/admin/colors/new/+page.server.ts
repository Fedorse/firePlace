import { db } from '$lib/data/db.server';
import { colors } from '$lib/data/schema';
import type { Actions } from './$types';

export const actions: Actions = {
	addColor: async ({ request }) => {
		const formData = await request.formData();
		const hex = formData.get('hex');
		const name = formData.get('name');

		try {
			await db.insert(colors).values({
				hex,
				name
			});
			return { success: true };
		} catch (error) {
			return { error: 'Ошибка при добавление цвета в БД' };
		}
	}
};
