# Step 1: Build React App
FROM node:18-alpine as build
 
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
 
COPY . ./
RUN npm run build
 
# Step 2: Serve with Nginx
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
 
# Optional: Custom Nginx config
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
 
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
