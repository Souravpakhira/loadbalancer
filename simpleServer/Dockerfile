FROM node:21-bullseye-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . /app/

ENV PORT=3000

CMD ["npm", "run", "server"]

