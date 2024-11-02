import * as t from "drizzle-orm/mysql-core";
import { mysqlTable as table } from "drizzle-orm/mysql-core";
import timestamps from "@utils/softdate.helpers";
import { z } from "zod";

export const users = table("users", {
  id: t.int().autoincrement().primaryKey(),
  name: t.text("name").notNull(),
  email: t.text("email").notNull(),
  picture: t.text("picture").notNull(),
  role: t
    .mysqlEnum(["MEMBER", "MODERATOR", "ADMIN"])
    .notNull()
    .default("MEMBER"),
  ...timestamps,
});

export const User = z.object({
  id: z.number().int().positive(),
  role: z.string().optional(),
});

export type User = z.infer<typeof User>;
