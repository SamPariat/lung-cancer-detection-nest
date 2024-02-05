FROM node:20.11.0-alpine3.19

WORKDIR /app

COPY . .

COPY package*.json .

RUN npm install

ENV NODE_ENV development

EXPOSE 6257

CMD npm run start:dev
