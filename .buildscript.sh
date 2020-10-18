function log {
    echo -en "\033[34;1m[buildscript] \033[0m"
    echo $1
}

log "Cleanup of previous mess"
rm -rf dist/public
rm -rf dist/build

log "Building React client"
# build react client
cd ../client && npm run build
echo ""
log "React client build successfull"

log "Building Express server"
# build express server
cd ../server && npm run self-build
echo ""
log "Express server build successfull"

log "Fetching React's build"
# copy react's build output to server's dist/ dir
cp -r ../client/build/ dist/
log "React's build fetched"

log "Renaming dist/build to dist/public"
# rename the newly copied build/ dir to public/ for the server to serve these static files
mkdir dist/public
mv dist/build/* dist/public
rmdir dist/build
log "Renaming successfull"

log "Build completed! Run \"npm start\" to start the server"