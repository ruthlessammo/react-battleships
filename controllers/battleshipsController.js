const { battleshipKey, url} = require('../config/environment');
const rp = require('request-promise');

function getBattleShips(req, res, next) {
  rp.get({
    url: `${url}/battle`,
    headers: {
      'x-api-key': battleshipKey
    }
  }).then( data => {
    res.json(data);
  });
}


module.exports = { getBattleShips }
