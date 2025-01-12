import * as t from "drizzle-orm/mysql-core";
import { mysqlTable as table } from "drizzle-orm/mysql-core";
import { timestamps } from "../../utils/softdate.helpers";
import { z } from "zod";

export const users = table("users", {
  id: t.serial("id").primaryKey(),
  name: t.varchar("name", { length: 255 }).notNull(),
  email: t.varchar("email", { length: 255 }).notNull().unique(),
  picture: t.varchar("picture", { length: 255 }).notNull(),
  role: t
    .mysqlEnum("role", ["MEMBER", "MODERATOR", "ADMIN"])
    .notNull()
    .default("MEMBER"),
  ...timestamps,
});

export const User = z.object({
  id: z.number().int().positive(),
  role: z.string().optional(),
});

export type User = z.infer<typeof User>;
