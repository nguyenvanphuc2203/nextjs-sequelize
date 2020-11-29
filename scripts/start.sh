#!/bin/sh

if [ "$NODE_ENV" == "production" ] ; then
  npm install --save-dev sequelize-cli &
  npx sequelize db:migrate &
  npx sequelize db:seed:all &
  npm run start
else
  npm run dev
fi