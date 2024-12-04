# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the container
COPY . .

# Build the application
RUN npm run build

# Use an Nginx server to serve the built app
FROM nginx:alpine
# Copy the built files to Nginx's default HTML directory
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
