FROM node:18 AS base

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

CMD ["node", "dist/main"]



FROM base AS development

RUN npm install 

CMD ["npm", "run", "start:dev"]



FROM base AS production

RUN npm run build
