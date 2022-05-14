# Set the base image to node 14.19
FROM node:14.16-alpine
WORKDIR /app
COPY . .

# ENVS for connect to the API
ENV API_IP=localhost
ENV API_PORT=8080

# Add the packages and 
# erase unnecesary files.
RUN npm install @angular/cli@13.3.1 && \
	npm run build && \
    npm cache clean --force && \
    rm -rf /app/node_modules && \
    rm -rf /app/.angular && \
    npm install http-server && \
    rm -rf /root/.cache && \
    rm -rf /root/.npm && \
    printf '#!/bin/sh\n/app/node_modules/http-server/bin/http-server "/app/dist/praxis-fe" localhost -p 4200 -P http://${API_IP}:${API_PORT}/\n' > /serve && chmod +x /serve

ENTRYPOINT ["/serve"]

# Expose the default Gildedrose frontend port
EXPOSE 4200