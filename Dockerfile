FROM node:18

RUN yarn install --frozen-lockfile

COPY . .

CMD node index.js
