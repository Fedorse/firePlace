import { pgTable, serial, boolean, text, integer, varchar } from 'drizzle-orm/pg-core';

export const product = pgTable('product', {
    id: serial('id').primaryKey(),
    published: boolean('published').default(true),
    name: varchar('name', { length: 256 }).notNull().unique(),
    short_description: text('short_description').notNull(),
    description: text('description').default(''),
    imgUrl: varchar('imgUrl').default(''),
    videoFile: varchar('videoFile').default(''),
    price: integer('price').notNull(),
    sort_order: integer('sort_order').default(0).notNull(),
    categories_id: integer('categories_id').references(() => categories.id, { onDelete: 'cascade' }),
    new_column: text('new_column')  // Новый столбец

});

export const categories = pgTable('categories', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    name_en: text('name_en').notNull()
});
