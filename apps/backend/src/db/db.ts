import dotenv from 'dotenv';
dotenv.config(); 

import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  throw new Error('DATABASE_URL is not defined in the environment');
}

export const db = (async () => {
  try {
    const connection = await mysql.createPool(databaseUrl);
    return drizzle({
      client: connection,
    });
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    throw error;
  }
})();
