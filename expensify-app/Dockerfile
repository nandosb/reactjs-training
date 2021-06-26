# specify the node base image with your desired version node:<version>
FROM node:14
RUN mkdir /app
COPY entrypoint.sh /app/entrypoint.sh
WORKDIR /app

EXPOSE 8080

ENTRYPOINT "/app/entrypoint.sh"