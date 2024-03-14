const http = require('http');

const routes = require('./assignmentRoute')

const server = http.createServer(routes.handler)
server.listen(3004)