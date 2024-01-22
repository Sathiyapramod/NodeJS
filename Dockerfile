FROM node:latest

WORKDIR /back_end

COPY . .

RUN npm install 

EXPOSE 3000

CMD ["npm","run","dev"]
