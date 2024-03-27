# Use an official Node.js runtime as a parent image
FROM node:20.12

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your app will run on (assuming your app runs on port 3000)
EXPOSE 8089

# Define the command to start your application
CMD ["npm", "start"]
