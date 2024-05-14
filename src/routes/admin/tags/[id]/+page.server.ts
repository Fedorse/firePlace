import type {Actions} from './$types'
import { eq } from 'drizzle-orm'
import { db } from '$lib/data/db.server'
import { tags } from '$lib/data/schema'


export const load = async ({ params }) => {
    const tag = await  db.query.tags.findFirst({
            where: eq(tags.id, Number(params.id))
    })

    return {tag}
}

export const actions: Actions = {
    updateCategory: async ({ request}) => {
        const formData = await request.formData()

        const id = Number(formData.get('id'))
        const category = await db.query.tags.findFirst({
                        where: eq(tags.id, id)})
        const name = formData.get('name') || ''
        const name_en = formData.get('name_en') || ''




        if (!category) {
            throw new Error('Tags not found')
        }

        try {
            await db.update(tags)
            .set({name: name, name_en:name_en})
            .where(eq(tags.id, id))
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
            await db.delete(tags).where(eq(tags.id, id))
            return {success : true, message: 'Tags was successfully delete'}
        } catch(error) {
            return { success: false, message: "Failed to delete the Tags." };
        }
    }
}


