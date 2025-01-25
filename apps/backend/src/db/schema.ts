import { int, mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../utils/softdate.helpers";
import { z } from "zod";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  googleId: varchar("googleId", { length: 255 }).notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).unique().notNull(),
  picture: varchar("picture", { length: 255 }).notNull(),
  role: mysqlEnum("role", ["MEMBER", "MODERATOR", "ADMIN"])
    .notNull()
    .default("MEMBER"),
  ...timestamps,
});

// Schema for the user object
export const userSchema = z.object({
  id: z.number(),
  googleId: z.string(),
  name: z.string(),
  email: z.string(),
  picture: z.string(),
  role: z.enum(["MEMBER", "MODERATOR", "ADMIN"]),
  createdAt: z.string(),
  updatedAt: z.string(),
});
