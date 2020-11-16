#!/bin/sh
if [ -e chrome ]; then
  rm -r chrome
fi
mkdir chrome
cp -r dist background content images option popup manifest.json chrome
zip -r chrome.zip chrome
rm -r chrome