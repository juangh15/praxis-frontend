# Set the base image to Ubuntu
FROM node:lts-alpine3.15
COPY . .

ARG API_URL_ARG
ENV API_URL = API_URL_ARG

# Add the packages
RUN npm install

# Expose the default Gildedrose frontend port
EXPOSE 4200

CMD ["npm", "start"]
