# build environment
FROM node:16-alpine3.13 as build-step
WORKDIR /app

COPY package*json /app/
RUN npm ci

COPY ./ /app/
RUN npm run build

# web-server
FROM nginx:1.21-alpine

COPY --from=build-step /app/build /var/www
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf