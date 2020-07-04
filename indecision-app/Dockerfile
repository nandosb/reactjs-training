# specify the node base image with your desired version node:<version>
FROM node:14
# RUN npm install -g live-server
# RUN npm install -g babel-cli@6.24.1
RUN mkdir /app
COPY entrypoint.sh /app/entrypoint.sh
WORKDIR /app
RUN chmod 775 entrypoint.sh