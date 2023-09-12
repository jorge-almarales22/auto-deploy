FROM node:19-alpine3.15 as dev-deps
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "start"]