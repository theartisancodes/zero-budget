# Use the official Node.js image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN yarn build

# Expose port 3000 (or the port your Next.js app runs on)
EXPOSE 3000

# Start the Next.js app
CMD ["yarn", "dev"]
