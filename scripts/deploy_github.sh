#!/usr/bin/env bash
yarn build &&
cd build &&
git init &&
git add . &&
git commit -m 'deploy' &&
git remote add origin https://github.com/Shiqi1998q/morney-website.git &&
git branch -M main &&
git push -u origin main -f &&
cd -