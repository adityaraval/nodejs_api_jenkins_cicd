#!/usr/bin/env sh
echo "Build started for $BRANCH_NAME Branch by $GIT_COMMITTER_NAME"
export PATH=/usr/local/bin:$PATH

echo 'The following "npm" command installs your Node.js packages into'
echo '"~/.jenkins/workspace/node-api-example" directory),'
set -x
npm install
set +x

echo 'The following "npm" command does Linting of source code'
set -x
npm run lint:fix
set +x

echo 'The following "npm" command runs your Node.js application'
echo 'Visit http://localhost:8081 to see your Node.js application in action.'
npm start
