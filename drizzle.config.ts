import type { Config } from 'drizzle-kit';

export default {
	schema: './src/lib/data/schema.ts',
	out: './drizzle',
	driver: 'pg', 
	dbCredentials: {
		host: 'localhost',
		user: 'dev_user',
		password: 'dev_pass',
		database: 'dev_db'
	}
} satisfies Config;


