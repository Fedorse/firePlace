import type { Config } from 'drizzle-kit';

export default {
  schema: './src/lib/data/schema.ts',
  out: './drizzle',
  dialect: 'postgresql', // Указание диалекта базы данных
  dbCredentials: {
    url: "postgres://default:yQEOq1CFZsc4@ep-aged-snow-a15ucg8i.ap-southeast-1.aws.neon.tech:5432/verceldb?sslmode=require"
  }
} satisfies Config;