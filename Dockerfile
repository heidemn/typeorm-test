FROM node:14-alpine

RUN set -ex; \
    apk --update-cache upgrade; \
    rm -rfv /var/cache/apk/*

WORKDIR /app
COPY package*.json /app/
RUN npm ci

COPY . /app/
RUN npm run build

CMD ["npm", "run", "prod"]
