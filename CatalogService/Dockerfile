# Use the official Node.js image as a base
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json files to the container

COPY package*.json ./

# Install dependencies
RUN npm install

RUN apt-get update && apt-get install -y sqlite3

COPY . .

# Copy the rest of the application code

# Expose the port your app runs on
EXPOSE 8058

# Command to run the application
CMD ["node", "CatalogService/Catalog.js"]
