# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the project dependencies
RUN npm install

# Copy the application files to the working directory
COPY . .

# Expose the port that the application will run on
EXPOSE 3000

# Set the command to run the application
CMD ["node", "server.js"]
