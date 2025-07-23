FROM node:20-alpine

WORKDIR /usr/src/app

COPY ./package.json ./package.json
COPY ./pnpm-lock.yaml ./pnpm-lock.yaml
COPY ./turbo.json ./turbo.json

COPY ./packages ./packages

COPY ./apps/ws-server ./apps/ws-server

RUN npm install -g pnpm 
RUN pnpm install --recursive

RUN pnpm generate:db

WORKDIR /usr/src/app/apps/ws-server

EXPOSE 8080

CMD [ "pnpm", "dev" ]