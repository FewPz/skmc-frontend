"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink, getFetch, loggerLink } from "@trpc/client";
import { trpc } from "./trpc";
import queryClient from "./queryClient";
import { useState } from "react";

export const TrpcProvider = ({ children }: { children: React.ReactNode }) => {
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        loggerLink({
          enabled: () => true,
        }),
        httpBatchLink({
          url: process.env.NEXT_PUBLIC_TRPC_API_URL!,
          fetch: async (input, init) => {
            const fetchFn = getFetch();
            return fetchFn(input, {
              ...init,
              credentials: "include",
            });
          },
        }),
      ],
    })
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
