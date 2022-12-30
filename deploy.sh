#!/usr/bin/env bash

# abort on errors
set -e

trap 'echo "Deployment failed. Check the logs for more information."' ERR

# navigate into the build output directory
cd dist

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git init
git checkout -B main
git add -A
git commit -m 'deploy'

git push main:gh-pages

cd -
