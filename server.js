const express = require('express');

const app = express;

app.set('port', (process.env.PORT || 3001));

app.get('/api', (req, res) => {
  request({
    url: `http://zyqh9s9xt4.execute-api.eu-west-1.amazonaws.com/prod`,
    headers: {
      x-api-key: 'zzgIYX4p6r4RZKC9wzlVB8QaUnHOSxrUauYk5ikk',
    },
  }, (err, response, body) => {
    if (!err && response.statusCode === 200) {
      res.send(body);
    }
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.listen(app.get('port'), () => {
  console.log(`server b at: http://localhost:${app.get('port')}/`);
});
