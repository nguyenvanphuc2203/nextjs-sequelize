#!/bin/sh

npm install --save-dev sequelize-cli &
npx sequelize db:migrate &
npx sequelize db:seed:all &

if [ "$NODE_ENV" == "production" ] ; then
  npm run start
else
  npm run dev
fi