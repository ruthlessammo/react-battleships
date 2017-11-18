const { battleshipKey, url} = require('../config/environment');
const rp = require('request-promise');

function getBattleShips(req, res, next) {
  return rp.get({
    url: `${url}/battle`,
    headers: {
      'x-api-key': battleshipKey
    }
  }).then( data => {
    res.json(data);
  })
  .catch(next)
}

function newBattleShips(req, res, next) {
  return rp.post({
    url: `${url}/battle`,
    headers: {
      'x-api-key': battleshipKey
    }
  }).then( data => {
    res.json(data);
  })
  .catch(next)
}


module.exports = { getBattleShips, newBattleShips }
