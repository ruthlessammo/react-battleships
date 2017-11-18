const router = require('express').Router();
const battleshipController = require('../controllers/battleshipsController');

router.route('/battle')
  .get(battleshipController.getBattleShips)
  .post(battleshipController.newBattleShips)

module.exports = router;
