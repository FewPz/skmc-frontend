import type { AppRouter } from "../../../backend/src/trpc/routers/index";
import { createTRPCReact } from "@trpc/react-query";

export const trpc = createTRPCReact<AppRouter>();
