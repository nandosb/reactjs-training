#!/bin/bash

echo $PWD
echo "Installing dependencies"
yarn install
echo "Instalation completed"

echo "Compiling  JSX"
yarn run build |& tee -a tmp/logs/webpack.log &

echo "Running web server"
yarn run webServer |& tee -a tmp/logs/web_server.log