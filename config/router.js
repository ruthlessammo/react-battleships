const router = require('express').Router();

router.all('*', (res,res) => res.notFound());

module.exports = router;
