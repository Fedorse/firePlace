// import { db } from '$lib/data/db.server';
// import { product } from '$lib/data/schema';
// import type { Actions } from './$types';
// console.log(product)

// export const actions: Actions = {
//   addProduct: async ({ request }) => {
//     const formData = await request.formData();
//     const name = formData.get('name');
//     const shortDescription = formData.get('shortDescription');
//     const description = formData.get('description');
//     const imgUrl = formData.get('imgUrl');
//     const videoUrl = formData.get('videoUrl');
//     const price = Number(formData.get('price'));
//     const sortOrder = Number(formData.get('sortOrder'));
//     const categoryId = Number(formData.get('categoryId'));

//     try {
//       await db.insert(product).values({
//         name,
//         shortDescription,
//         description,
//         imgUrl,
//         videoUrl,
//         price,
//         sortOrder,
//         categoryId
//       });
//     } catch (error) {
//       return { error: 'Ошибка при добавлении продукта' };
//     }

//     return { success: true };
//   }
// };



// import { db } from "$lib/data/db.server";
// import type { Action } from "@sveltejs/kit";
// import { product } from '$lib/data/schema'
// import { eq } from "drizzle-orm/expressions";


// export const load = async () => {
//     const  productTable = await db.query.product.findMany()

//     return {productTable}
// };


// export const actions: Action = {
//     addProduct: async ({ request }) => {
//             const formData = await request.formData();
//             const name = formData.get('name');
//             const description = formData.get('description');

//             const newProduct = await db.insert(product).values({
//                 name,
//                 description
//             });
//     },
//     deleteProduct: async({request}) => {
//         const formData = await request.formData()
//         const id = formData.get('id')

//         await db.delete(product).where(eq(product.id, parseInt(id as string)));
//     }
// };