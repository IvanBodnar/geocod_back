const express = require('express');
const routes = require('./routes');

const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(8080);
