// IMPORTS AND JOIN SERVERS
const express = require('express');
const actionsRouter = require('./Routes/actionsRouter');
const projectsRouter = require('./Routes/projectsRouter');
const server = express();


// CONNECT SERVER TO ROUTERS
server.use('/api/actions', logger, actionsRouter);
server.use('/api/projects', logger, projectsRouter);


// MIDDLEWARE
server.use(express.json())
function logger(req, res, next) {
    console.log(`${req.method} to ${req.originalUrl} at [${new Date().toISOString()}].`)
  
    next();
  }


//EXPORT
module.exports = server;
