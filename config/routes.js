const router = require('express').Router();
const battleshipController = require('../controllers/battleshipsController');

router.route('/battle')
  .get(battleshipController.getBattleShips)
  .post(battleshipController.newBattleShips)

router.route('/battle/:id')
  .get(battleshipController.getSelectedBattleship);

router.route('/battle/:id/fire')
  .post(battleshipController.fireAction)
module.exports = router;
