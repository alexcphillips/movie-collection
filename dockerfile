FROM node:latest

WORKDIR /app
COPY . .

# RUN npm install -g npm@8.19.2
RUN npm install

EXPOSE 3000
EXPOSE 27018

CMD [ "node", "server/index" ]