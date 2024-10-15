import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Asegúrate de definir esta variable en tu .env
  ssl: {
    rejectUnauthorized: false, // Permitir conexiones SSL si es necesario
  },
});

export const db = drizzle(pool);