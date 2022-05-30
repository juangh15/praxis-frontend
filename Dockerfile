# Set the base image to node 14.19
FROM node:14.16-alpine
WORKDIR /app
COPY . .

# ENVS for connect to the API
ENV API_IP=172.17.0.3
ENV API_PORT=8080

# Add the packages and erase unnecesary files.
RUN npm ci && \
    npm run build && \
    npm cache clean --force && \
    rm -rf /app/node_modules /app/.angular /root/.cache /root/.npm && \
    npm install --no-package-lock --no-save http-server && \
    printf '#!/bin/sh\n/app/node_modules/http-server/bin/http-server "/app/dist/praxis-fe" localhost -p 4200 -P http://${API_IP}:${API_PORT}/\n' > /serve && chmod +x /serve

ENTRYPOINT ["/serve"]

# Expose the default Gildedrose frontend port
EXPOSE 4200
