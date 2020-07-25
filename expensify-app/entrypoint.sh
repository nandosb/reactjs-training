#!/bin/bash

echo $PWD
echo "Installing dependencies"
yarn install
echo "Instalation completed"

echo "Compiling  JSX" # only for production environment
# yarn run build |& tee -a tmp/logs/webpack.log &

echo "Running web server"
yarn run webpack-dev-server |& tee -a tmp/logs/web_server.log