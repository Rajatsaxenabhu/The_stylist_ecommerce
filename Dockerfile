FROM node:20.1.0
WORKDIR /usr/src/backend
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm","run","dev"]
