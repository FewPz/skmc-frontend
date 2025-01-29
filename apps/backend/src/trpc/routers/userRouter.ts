// use for get create update delete user
import { router } from "../trpc";
import { publicProcedure } from "../trpc";
import { db } from "../../db/db";
import { users } from "../../db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
export const userRouter = router({
  getUser: publicProcedure.query(() => {
    return db.select().from(users);
  }),
  deleteUser: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input }) => {
      return db.delete(users).where(eq(users.id, input.id));
    }),
});
