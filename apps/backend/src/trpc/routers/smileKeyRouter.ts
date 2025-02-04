// use for get create update delete smileKeys
import { router } from "../trpc";
import { publicProcedure } from "../trpc";
import { db } from "../../db/db";
import { smileKeys } from "../../db/schema";
import { generateSecureKey } from "../utils";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const smileKeysRouter = router({
  getSmileKeys: publicProcedure.query(() => {
    return db
      .select({
        id: smileKeys.id,
        key: smileKeys.key,
        owner: smileKeys.owner,
        createdAt: smileKeys.created_at,
      })
      .from(smileKeys);
  }),
  createSmileKeys: publicProcedure
    .input(z.object({ number: z.number() }))
    .mutation(({ input }) => {
      const keys = Array.from({ length: input.number }, () =>
        generateSecureKey()
      );
      db.insert(smileKeys).values(keys.map((key) => ({ key })));
      return { keys };
    }),
  deleteSmileKeys: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input }) => {
      return db.delete(smileKeys).where(eq(smileKeys.id, input.id));
    }),
});
