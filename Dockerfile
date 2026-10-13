# ---------- Stage 1: dependencies / build ----------
FROM node:22-alpine AS builder

WORKDIR /app

# Copy dependency manifests first so this layer is cached
# unless package.json actually changes
COPY package.json package-lock.json ./

# Install production deps only (deterministic via lockfile).
# mkdir -p keeps the COPY in the runtime stage working even when
# there are zero dependencies (npm ci skips creating node_modules).
RUN npm ci --omit=dev --no-audit --no-fund && mkdir -p node_modules

# ---------- Stage 2: minimal runtime image ----------
FROM node:22-alpine AS runner

ENV NODE_ENV=production
# Default port, overridable at runtime (-e PORT=...)
ENV PORT=3000

WORKDIR /app

# Switch to the unprivileged "node" user shipped with the image
USER node

# Copy only what is needed from the builder stage
COPY --from=builder --chown=node:node /app/node_modules ./node_modules
COPY --chown=node:node package.json ./
COPY --chown=node:node server.js ./

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://127.0.0.1:${PORT}/health || exit 1

CMD ["node", "server.js"]
