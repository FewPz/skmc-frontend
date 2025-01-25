import { int, mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { timestamps } from "../utils/softdate.helpers";
import { z } from "zod";
import { relations } from "drizzle-orm";

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

export const usersRelations = relations(users, ({ many }) => ({
  smileKeys: many(smileKeys),
}));

// Schema for the user object
export const userSchema = z.object({
  id: z.number().optional(),
  googleId: z.string(),
  name: z.string(),
  email: z.string(),
  picture: z.string(),
  role: z.enum(["MEMBER", "MODERATOR", "ADMIN"]).default("MEMBER"),
  createdAt: z.string().optional(),
  updatedAt: z.string().optional(),
});

// Schema for the user object with JWT token
export const userJwtSchema = z.object({
  name: z.string(),
  role: z.enum(["MEMBER", "MODERATOR", "ADMIN"]).default("MEMBER"),
});

export const smileKeys = mysqlTable("smileKeys", {
  id: int("id").primaryKey().autoincrement(),
  key: varchar("key", { length: 32 }).notNull(),
  owner: varchar("owner", { length: 255 }).unique(),
  ...timestamps,
});

export const smileKeysRelations = relations(smileKeys, ({ one }) => ({
  owner: one(users, {
    fields: [smileKeys.owner],
    references: [users.email],
  }),
}));
