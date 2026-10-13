# ---------- Stage 1: build & compress ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Install UPX to compress the node binary (123MB → ~35MB)
RUN apk add --no-cache upx

# Copy dependency manifests first for better layer caching
COPY package.json package-lock.json ./

# Install production deps only (deterministic via lockfile)
RUN npm ci --omit=dev --no-audit --no-fund && mkdir -p node_modules

# Compress the node binary — biggest size win
RUN upx --best --lzma /usr/local/bin/node

# ---------- Stage 2: minimal runtime ----------
FROM alpine:3.21 AS runtime

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app

# Node binary needs libstdc++ and libgcc from alpine
RUN apk add --no-cache libstdc++ libgcc

# Copy only the compressed node binary and app files
COPY --from=builder /usr/local/bin/node /usr/local/bin/node
COPY --from=builder /app/node_modules ./node_modules
COPY package.json ./
COPY server.js ./

# Create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT}/health || exit 1

CMD ["node", "server.js"]
