// IMPORTS AND JOIN SERVERS
require("dotenv").config();
const express = require('express');
const actionsRouter = require('./Routes/actionsRouter');
const projectsRouter = require('./Routes/projectsRouter');
const server = express();


// CONNECT SERVER TO ROUTERS
server.use(express.json())
server.use('/api/actions', logger, actionsRouter);
server.use('/api/projects', logger, projectsRouter);


// MIDDLEWARE

function logger(req, res, next) {
    console.log(`${req.method} to ${req.originalUrl} at [${new Date().toISOString()}].`)
  
    next();
  }

// ROOT
server.get("/", (req, res) => {
    res.status(200).json({ message: "welcome"})
})


//EXPORT
module.exports = server;
