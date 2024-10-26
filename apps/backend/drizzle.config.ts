import { defineConfig } from "drizzle-kit";
import dotenv from 'dotenv';
dotenv.config();

export default defineConfig({
  dialect: 'mysql', // 'mysql' | 'sqlite' | 'turso'
  schema: './src/db/schema',
  dbCredentials: {
    url: process.env.DATABASE_URL || ''
  }
})