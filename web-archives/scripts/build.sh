#!/bin/sh

CURRENT_SOURCE_DIR=$1
OUTPUT=$2

cd $CURRENT_SOURCE_DIR

rm $OUTPUT
npm run release && cp web-archives/build/darkreader.js $OUTPUT
