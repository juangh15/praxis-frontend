# Set the base image to node 14.19
FROM node:14.19-alpine
WORKDIR /app
COPY / ./
COPY package*.json ./

ENV API_URL=api-container

# Add the packages
RUN npm install -g @angular/cli@13.3.1 && \
    npm install

# Expose the default Gildedrose frontend port
EXPOSE 4200

ENTRYPOINT ["npm", "start"]
