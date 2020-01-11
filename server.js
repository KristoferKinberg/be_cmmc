const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const serveStatic = require('serve-static');
const db = require('./models/index');

/**
 * ENV
 */
require('custom-env').env('dev');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

// configure Express
app.set('views', __dirname + '/api/views');
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

/**** SUPER IMPORTANT CORS ISSUE FIX */
const corsMiddleware = cors({ origin: [process.env.URL, 'http://localhost:4200'] });

app.use(corsMiddleware);
app.options('*', corsMiddleware);
/**** SUPER IMPORTANT CORS ISSUE FIX */

module.exports = app;
