FROM node:18

WORKDIR /app

COPY . .

RUN npm ci --produciton

RUN npm run build

EXPOSE 3000
