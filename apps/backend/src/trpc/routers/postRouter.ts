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
    .query(({ input }) => {
      return db.select().from(posts).where(eq(posts.id, input.id));
    }),
  createPost: publicProcedure
    .input(z.object({ title: z.string(), content: z.string() }))
    .mutation(({ input }) => {
      return db
        .insert(posts)
        .values({ title: input.title, content: input.content });
    }),
  // updatePost: publicProcedure
  deletePost: publicProcedure
    .input(z.object({ id: z.number() }))
    .mutation(({ input }) => {
      return db.delete(posts).where(eq(posts.id, input.id));
    }),
});
