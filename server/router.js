const express = require('express');
const router = express.Router();
const controller = require('./controller/controller.js');

router
  .route('/login')
  .get(controller.getLogin)

router
  .route('/callback')
  .get(controller.afterLogin)

module.exports = router;