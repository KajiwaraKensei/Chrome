#!/bin/sh
if [ -e work ]; then
  rm -r work
fi
mkdir work
cp -r dist background content images option popup manifest.json work
zip -r chrome.zip work
rm -r work