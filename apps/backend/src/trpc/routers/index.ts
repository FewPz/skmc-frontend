//  main router
import { t } from "../trpc";
import { userRouter } from "./userRouter";
import { smileKeysRouter } from "./smileKeyRouter";
import { postRouter } from "./postRouter";

export const appRouter = t.router({
  user: userRouter,
  smileKey: smileKeysRouter,
  post: postRouter,
});

export type AppRouter = typeof appRouter;
