FROM node:20-alpine AS base
    ENV PNPM_HOME="/pnpm"
    ENV PATH="$PNPM_HOME:$PATH"
    RUN corepack enable
    RUN DOCKER_BUILDKIT=1
    ARG DATABASE_URL
    
FROM base AS builder
    RUN apk add --no-cache libc6-compat
    RUN apk update
    WORKDIR /usr/src/skmc-monorepo
    RUN pnpm install turbo@2 -g
    COPY . .
    COPY .env .env
    RUN pnpx turbo prune backend --docker

FROM base AS installer
    RUN apk add --no-cache libc6-compat
    RUN apk update
    WORKDIR /usr/src/skmc-monorepo
    COPY .gitignore .gitignore
    COPY --from=builder /usr/src/skmc-monorepo/out/json/ .
    COPY --from=builder /usr/src/skmc-monorepo/out/pnpm-lock.yaml ./pnpm-lock.yaml
    RUN pnpm install
    COPY --from=builder /usr/src/skmc-monorepo/out/full/ .
    COPY turbo.json turbo.json
    RUN pnpm turbo build --filter=backend...

FROM base AS runner
    WORKDIR /usr/src/skmc-monorepo
    COPY --from=installer /usr/src/skmc-monorepo .
    WORKDIR /usr/src/skmc-monorepo/apps/backend
    EXPOSE 3001
    CMD pnpm start