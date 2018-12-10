FROM node:latest

WORKDIR /var/www/app

COPY . ./

EXPOSE 6590

RUN npm install

CMD ["npm","run","dev"]
