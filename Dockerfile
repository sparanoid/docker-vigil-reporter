FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY . /app

RUN yarn --frozen-lockfile && \
    yarn cache clean

CMD [ "node", "index.js" ]
