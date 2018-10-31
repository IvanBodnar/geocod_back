const express = require('express');
const controllers = require('./controllers');

const router = express.Router();


router.get('/streets', controllers.streets);

router.get('/street/:name', controllers.street);

router.get('/intersection', controllers.intersection);

module.exports = router;
