import dotenv from "dotenv";
dotenv.config();

import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

const databaseUrl = process.env.DATABASE_URL;
const devDatabaseUrl = process.env.DEV_DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined in the environment");
}
if (!devDatabaseUrl) {
  throw new Error("DEV_DATABASE_URL is not defined in the environment");
}

const connectionPool = mysql.createPool(databaseUrl);
export const db = drizzle(connectionPool);
