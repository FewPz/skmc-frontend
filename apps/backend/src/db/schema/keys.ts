import * as t from "drizzle-orm/mysql-core";
import { mysqlTable as table } from "drizzle-orm/mysql-core";
import { users } from "./users";
import { z } from "zod";

export const keys = table("keys", {
  id: t.serial("id").primaryKey(),
  key: t.varchar("key", { length: 255 }).notNull().unique(),
  owner: t.varchar("owner", { length: 255 }).references(() => users.email),
  createdAt: t.timestamp("createdAt").defaultNow().notNull(),
});

export const KeySchema = z.object({
  id: z.number().positive(),
  key: z.string().length(32),
  owner: z.string().email().nullable(),
  createdAt: z.date(),
});

export type Key = z.infer<typeof KeySchema>;
