import { pgTable, serial, text,integer } from 'drizzle-orm/pg-core';

export const tours = pgTable('tours', {
	id: serial('id').primaryKey(),
	name: text('name'),
	description: text('description').notNull().default(''),
	img_url: text('img').notNull().default(''),
	duration: integer('duration').notNull(),
    test_line: text('test_line').notNull()
});

