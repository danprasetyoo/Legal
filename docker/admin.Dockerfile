FROM node:18-alpine

WORKDIR /app

COPY admin/package*.json ./

RUN npm ci

COPY admin/ ./

EXPOSE 5007

CMD ["npm", "run", "dev"]
