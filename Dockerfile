############################
# Base
############################
FROM node:24.12.0-slim AS base
WORKDIR /app

############################
# Deps (dev + prod)
############################
FROM base AS deps
COPY package*.json ./
RUN npm ci --ignore-scripts

############################
# Build (TS/JS)
############################
FROM base AS build
ENV NODE_ENV=development
# Use cached deps from previous stage
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build --if-present

############################
# Prod deps only
############################
FROM base AS prod-deps
ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --omit=dev --ignore-scripts

# Runtime
FROM node:24.12.0-slim AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=prod-deps /app/node_modules ./node_modules
COPY --from=build /app/dist ./dist
COPY package*.json ./

USER node
EXPOSE 8080
CMD ["node","dist/server.js"]