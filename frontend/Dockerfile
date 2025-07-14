FROM node:18

# Set working directory
WORKDIR /app

# Copy only package.json and lock first (use layer caching)
COPY package.json ./
COPY package-lock.json ./

# Install dependencies inside container
RUN npm install

# Now copy the rest of your source files
COPY . .

# Explicitly fix permission issue
RUN chmod +x node_modules/.bin/react-scripts

# Expose the port used by React
EXPOSE 3000

# Start the development server
CMD ["npm", "start"]

