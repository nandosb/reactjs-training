#!/bin/bash

if [[ $NODE_ENV == "development" ]]; then
    webpack --mode=$NODE_ENV --watch
else
    webpack --mode=$NODE_ENV
fi