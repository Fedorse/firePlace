import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema'
import pg from 'pg';

const Pool = pg.Pool;

const pool = new Pool({
    user: 'dev_user',
    host: 'postgres', 
    database: 'dev_db',
    password: 'dev_pass',
    port: 5432, 
});

export const db = drizzle(pool, {schema});




