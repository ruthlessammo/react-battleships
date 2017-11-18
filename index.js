const express = require('express');

const { port } = require('./config/environment');
const routes = require('./config/routes');
const app = express();

app.use(express.static(`${__dirname}/public`));

app.use(routes);
app.listen(PORT, ()=> console.log('express is running on PORT: ' + PORT));
