FROM node:20-slim AS base
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable
WORKDIR /app

FROM base AS build-deps
COPY . .
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm i sharp
RUN pnpm run build

FROM base as production
COPY --from=build-deps /app/node_modules /app/node_modules
COPY --from=build-deps /app/.next /app/.next
COPY --from=build-deps /app/package.json /app/package.json
RUN useradd -ms /bin/bash nextuser
USER nextuser
EXPOSE 3000
CMD [ "pnpm", "start" ]

