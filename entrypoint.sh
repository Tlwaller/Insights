#!/bin/sh

npm rebuild esbuild

npm run build

npm start

exec "$@"
