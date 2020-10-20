#!/bin/bash
set -i
npm start &
PID=$!
git clone https://github.com/solid/solid-crud-tests
cd solid-crud-tests
git checkout v0.1.0
npm install
export SERVER_ROOT=http://localhost:3000
npm run jest
kill $PID
