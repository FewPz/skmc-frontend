# Use Node as base
FROM node:20-alpine AS base

# Set environment variables for pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN npm i pnpm -g

# Builder stage
FROM base AS builder
RUN apk add --no-cache libc6-compat
RUN apk update

WORKDIR /app
RUN pnpm i turbo@2 -g

# Copy source code and environment file
COPY . .
COPY .env .env

# Prune the project with Turbo
RUN pnpx turbo prune --scope=frontend --docker

# Installer stage
FROM base AS installer
RUN apk add --no-cache libc6-compat
RUN apk update
WORKDIR /app

# Copy files required for installation
COPY .gitignore .gitignore
COPY --from=builder /app/out/json/ .
COPY --from=builder /app/out/pnpm-lock.yaml ./pnpm-lock.yaml

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the full pruned output for frontend
COPY --from=builder /app/out/full/ .

# Copy turbo.json and environment file
COPY turbo.json turbo.json
COPY ./.env ./.env

# Build the frontend project with Turbo
RUN pnpm turbo run build --filter=frontend...

# Runner stage
FROM base AS runner
WORKDIR /app

# Create non-root user
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
USER nextjs

# Copy required files and directories for runtime
COPY --from=installer /app/apps/frontend/next.config.mjs ./apps/frontend/
COPY --from=installer /app/apps/frontend/package.json ./apps/frontend/
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/.next/static ./apps/frontend/.next/static
COPY --from=installer --chown=nextjs:nodejs /app/apps/frontend/public ./apps/frontend/public

# Ensure node_modules is available in the runner stage
COPY --from=installer --chown=nextjs:nodejs /app/node_modules ./node_modules

# Set the startup command
CMD ["pnpm", "dev"]
