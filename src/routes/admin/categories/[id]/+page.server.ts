import type {Actions} from './$types'
import { eq } from 'drizzle-orm'
import { db } from '$lib/data/db.server'
import { categories } from '$lib/data/schema'


export const load = async ({ params }) => {
    const category = await  db.query.categories.findFirst({
            where: eq(categories.id, Number(params.id))
    })

    return {category}
}

export const actions: Actions = {
    updateCategory: async ({ request}) => {
        const formData = await request.formData()

        const id = Number(formData.get('id'))
        const category = await db.query.categories.findFirst({
                        where: eq(categories.id, id)})
        const name = formData.get('name') || ''
        const name_en = formData.get('name_en') || ''




        if (!category) {
            throw new Error('Category not found')
        }

        try {
            await db.update(categories)
            .set({name: name, name_en:name_en})
            .where(eq(categories.id, id))
            .returning()
            return {success: true}
        } catch(error) {
            return { success: false, error: error.message };
        }
    },

    deleteCategory: async ({request}) => {
        try {
            const formData = await request.formData()
            const id = Number(formData.get('id'))
            await db.delete(categories).where(eq(categories.id, id))
            return {success : true, message: 'Category was successfully delete'}
        } catch(error) {
            return { success: false, message: "Failed to delete the category." };
        }
    }
}


