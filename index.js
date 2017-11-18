const express = require('express');
const bodyParser = require('body-parser');

const { port } = require('./config/environment');
const routes = require('./config/routes');
const app = express();

app.use(express.static(`${__dirname}/public`));
app.use(bodyParser.json());
app.use(routes);
app.listen(port, ()=> console.log(`express is running on port: ${port}`));
