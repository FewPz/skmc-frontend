import * as t from "drizzle-orm/mysql-core";
import { mysqlTable as table } from "drizzle-orm/mysql-core";
import { users } from "./users";
import timestamps from "../../utils/softdate.helpers";
import { z } from "zod";

export const keys = table("keys", {
  id: t.serial("id").primaryKey(),
  key: t.varchar("key", { length: 255 }).notNull().unique(),
  userId: t
    .int("userId")
    .references(() => users.id)
    .notNull(),
  createdAt: t.timestamp("createdAt").defaultNow().notNull(),
});

export const KeySchema = z.object({
  id: z.number().positive(),
  key: z.string().length(32),
  userId: z.number().positive(),
  createdBy: z.number().positive(),
  createdAt: z.date(),
});

export type Key = z.infer<typeof KeySchema>;
