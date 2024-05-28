import { pgTable, serial, boolean, text, integer, varchar, primaryKey } from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

export const products = pgTable('products', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 256 }).notNull().unique(),
	published: boolean('published').default(true),
	short_description: text('short_description').notNull(),
	description: text('description').default(''),
	imgUrl: varchar('imgUrl').default(''),
	videoFile: varchar('videoFile').default(''),
	price: integer('price').notNull(),
	sort_order: integer('sort_order').default(0).notNull(),
	category_id: integer('categories_id').references(() => categories.id, { onDelete: 'cascade' }),
	sizes: text('sizes').default('')
});

export const categories = pgTable('categories', {
	id: serial('id').primaryKey(),
	name: text('name'),
	name_en: text('name_en').notNull()
});

export const tags = pgTable('tags', {
	id: serial('id').primaryKey(),
	name: text('name').notNull(),
	name_en: text('name_en').notNull()
});

export const colors = pgTable('colors', {
	id: serial('id').primaryKey(),
	hex: text('hex').notNull(),
	name: text('name').notNull()
});

export const productColors = pgTable(
	'product_colors',
	{
		productId: integer('product_id')
			.notNull()
			.references(() => products.id, { onDelete: 'cascade' }),
		colorId: integer('color_id')
			.notNull()
			.references(() => colors.id, { onDelete: 'cascade' })
	},
	(table) => ({
		pk: primaryKey({ columns: [table.productId, table.colorId] })
	})
);

export const productTags = pgTable(
	'product_tags',
	{
		productId: integer('product_id')
			.notNull()
			.references(() => products.id, { onDelete: 'cascade' }),
		tagId: integer('tag_id')
			.notNull()
			.references(() => tags.id, { onDelete: 'cascade' })
	},
	(table) => ({
		pk: primaryKey({ columns: [table.productId, table.tagId] })
	})
);

export const categoryRelations = relations(categories, ({ many }) => ({
	products: many(products)
}));

export const productRelations = relations(products, ({ one, many }) => ({
	category: one(categories, {
		fields: [products.category_id],
		references: [categories.id]
	}),
	productTags: many(productTags),
	productColors: many(productColors)
}));

export const productToColorRelations = relations(productColors, ({ one }) => ({
	product: one(products, {
		fields: [productColors.productId],
		references: [products.id]
	}),
	color: one(colors, {
		fields: [productColors.colorId],
		references: [colors.id]
	})
}));

export const productToTagsRelations = relations(productTags, ({ one }) => ({
	product: one(products, {
		fields: [productTags.productId],
		references: [products.id]
	}),
	tag: one(tags, {
		fields: [productTags.tagId],
		references: [tags.id]
	})
}));
