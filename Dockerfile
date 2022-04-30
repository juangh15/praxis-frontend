# Set the base image to Ubuntu
FROM node:lts-alpine3.15
COPY . .

ENV API_URL = 192.68.1.4:8080

# Add the packages
RUN npm install

CMD ["npm", "start"]
