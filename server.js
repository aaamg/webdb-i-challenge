const express = require('express');

const PostRouter = require('./posts/post-router');

const server = express();

server.use(express.json());

server.use('/api/accounts', PostRouter);

server.get('/', (req, res) => {
    res.send('<h3>Yes, I am running!</h3>');
  });

module.exports = server;

