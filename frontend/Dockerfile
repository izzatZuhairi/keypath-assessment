FROM node:22-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

RUN npm run build  

FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html
  
RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

ARG URL
ENV VITE_BACKEND_URL=$URL

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

