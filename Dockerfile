FROM node:18

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 4173

CMD ["npm", "start"]
