import { db } from "$lib/data/db.server";
import { tags } from "$lib/data/schema";
import type { Actions } from './$types'



export const actions: Actions = {
    addTag: async ({ request }) => {
        const formData = await request.formData()

        const name = formData.get('name')
        const name_en = formData.get('name_en') || ''

        try {
            await db.insert(tags).values({
                name,
                name_en
            })
            return {success: true}
        } catch(error) {
            return { error: 'Ошибка при добавлении продукта в БД' };
        }
    }
}