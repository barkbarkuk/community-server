#!/bin/bash
set -i
npm start &
git clone https://github.com/solid/solid-crud-tests
cd solid-crud-tests
npm install
# needed due to git dependency, until latest rdflib code is on npm:
cd node_modules/rdflib && npm install && npm run build && cd ../..
export SERVER_ROOT=http://localhost:3000
npm run jest
