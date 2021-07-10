'use strict';
require('dotenv').config();
const server = require('./src/server');
const mongoose = require('mongoose');
const PORT = process.env.port || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

pool.connect().then(()=>{
  server.start(PORT);
}).catch((e) => {
    console.error('CONNECTION ERROR', e.message);
  });