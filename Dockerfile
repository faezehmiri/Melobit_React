# Base image with Node.js 18.12
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm i

# Copy the rest of the app's source code to the container
COPY . .

# Build the React app
RUN npm run build

# Specify the command to run when the container starts
CMD [ "npm", "start" ]
