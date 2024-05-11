// import { pgTable, serial, boolean, text, integer,varchar } from 'drizzle-orm/pg-core';
// import { category } from './categories';

// export const product = pgTable('product', {
//     id: serial('id').primaryKey(),
//     published: boolean('published').default(true),
//     name: varchar('name', { length:256 }).notNull().unique(),
//     short_description: text('short_description').notNull(),
//     description: text('description').default(''),
//     img_url: varchar('img_url').default(''),
//     video_url: varchar('video_url').default(''),
//     price: integer('price').notNull(),
//     sort_order: integer('sort_order').default(0).notNull(),
//     category_id: integer('category_id').references(() => category.id, { onDelete: 'cascade' })
// })

