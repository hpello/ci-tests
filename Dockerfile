FROM node:7.4.0

WORKDIR /usr/src/app

COPY package.json .
RUN npm install --only=prod
COPY src ./src
COPY test ./test

EXPOSE 8080

CMD ["node", "./src/server.js"]
