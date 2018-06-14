# SacramentalRegistry
Storing sacramental records on the blockchain

# Development Environment
As you develop and support different applications with node you'll find the need to flip back and forth between
different versions of node to support those apps. One of the best tools that supports this is [nvm](https://github.com/creationix/nvm).
Instead of installing node directly on your machine install nvm. Then use that to install node.

#Application
Very simple application the create a /sacramental-registry endpoint that can handle GET and POST requests. Its
built using express.

## Running 

1. npm install
2. cd server
3. node app.js

## Testing the Endpoints

### CURL GET
curl http://localhost:3000/sacramental-records

### CURL POST
curl -d "@records.json" -X POST http://localhost:3000/sacramental-records
