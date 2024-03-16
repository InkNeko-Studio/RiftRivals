FROM node:21.1.0-alpine

WORKDIR /root/rift-rivals

COPY ./dist ./dist
COPY package*.json ./
COPY .env ./

RUN npm ci

CMD [ "npm", "run", "start:prod" ]