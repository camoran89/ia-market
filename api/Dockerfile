FROM node:20-alpine AS builder
WORKDIR /usr/src/api
COPY package.json package-lock.json* ./
RUN npm install --production=false
COPY tsconfig*.json ./
COPY src ./src
RUN npm run build

FROM node:20-alpine AS runner
WORKDIR /usr/src/api
COPY package.json package-lock.json* ./
RUN npm install --production
COPY --from=builder /usr/src/api/dist ./dist
ENV NODE_ENV=production
EXPOSE 4000
CMD ["node", "dist/main.js"]
