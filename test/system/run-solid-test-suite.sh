#!/bin/bash
set -e
npm start &
PID=$!
# git clone https://github.com/solid/solid-crud-tests
cd solid-crud-tests
git checkout v0.1.1
npm install
export SERVER_ROOT=http://localhost:3000
export ALICE_WEBID=http://localhost:3000/profile.ttl
curl -X PUT $ALICE_WEBID -d '<#me> <http://www.w3.org/ns/pim/space#storage> </>.'
npm run jest
kill $PID
