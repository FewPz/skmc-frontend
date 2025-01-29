//  main router
import { t } from "../trpc";
import { userRouter } from "./userRouter";
import { smileKeysRouter } from "./smileKeyRouter";

export const appRouter = t.router({
  user: userRouter,
  smileKey: smileKeysRouter,
});

export type AppRouter = typeof appRouter;
