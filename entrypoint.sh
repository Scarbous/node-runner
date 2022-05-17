#!/bin/sh

npm --prefix="$DIR" i --prefer-offline --no-audit  --progress=false 

exec "$@"