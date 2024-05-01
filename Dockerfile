# Docker file - to build the image
FROM node:14

RUN npm i -g @nestjs/cli

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]