FROM node:20-alpine AS base
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
RUN apk update && \
    apk upgrade && \
    apk add curl libc6-compat

# Install dependencies only when needed
FROM base AS build-deps

COPY package.json pnpm-lock.yaml* ./
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install --frozen-lockfile

# Rebuild the source code only when needed
FROM base AS builder

COPY --from=build-deps /app/node_modules ./node_modules
COPY . .
RUN pnpm run build

# Production image, copy all the files and run next
FROM base as production

ENV NODE_ENV="production"

RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 -s /bin/sh nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next && \
    chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ENV HOSTNAME="0.0.0.0"
ENV PORT=3000

USER nextjs
# EXPOSE 3000
CMD ["node", "server.js"]
