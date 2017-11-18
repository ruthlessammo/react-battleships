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

function getSelectedBattleship(req, res, next) {
  return rp.get({
    url: `${url}/battle/${req.params.id}`,
    headers: {
      'x-api-key': battleshipKey
    }
  })
  .then( data => res.json(data))
  .catch(next)
}

function fireAction(req, res, next) {
  console.log(req.body);
  return rp.post({
    url: `${url}/battle`,
    data: req.body,
    headers: {
      'x-api-key': battleshipKey
    }
  }).then( data => {
    res.json(data);
  })
  .catch(next)
}


module.exports = { getBattleShips, newBattleShips, getSelectedBattleship, fireAction }
