import { db } from '$lib/data/db.server';
import { product } from '$lib/data/schema';
import { DEFAULT_PRODUCT_IMAGE } from '$lib/utils/constsImg';
import { saveImage } from '$lib/utils/files';
import type { Actions } from './$types';


export const actions: Actions = {
  addProduct: async ({ request }) => {
    const formData = await request.formData();
    
    const name = formData.get('name');
    const short_description = formData.get('short_description');
    const description = formData.get('description');
    const imgFile = formData.get('image');
    const videoFile = formData.get('video');
    const price = Number(formData.get('price'));
    const sortOrder = Number(formData.get('sort_order'));

    let imgUrl = DEFAULT_PRODUCT_IMAGE // URL по умолчанию
    
    if(imgFile && imgFile.size > 0 )
        imgUrl = await saveImage(imgFile)

    try {
        await db.insert(product).values({
        name,
        short_description,
        description,
        imgUrl,
        videoFile,
        price,
        sortOrder,
      });

    } catch (error) {
      return { error: 'Ошибка при добавлении продукта в БД' };
    }

    return { success: true };
  }
};


