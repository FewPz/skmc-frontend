import { db } from "../../db/db";
import { router } from "../trpc";
import { publicProcedure } from "../trpc";
import { posts } from "../../db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const postRouter = router({
  getPosts: publicProcedure.query(() => {
    return db.select().from(posts);
  }),
  getPostById: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(async ({ input }) => {
      return await db.select().from(posts).where(eq(posts.id, input.id));
    }),
  createPost: publicProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(async ({ input }) => {
      return await db
        .insert(posts)
        .values({ title: input.title, content: input.content });
    }),
  // updatePost: publicProcedure
  deletePost: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      return await db.delete(posts).where(eq(posts.id, input.id));
    }),
});
