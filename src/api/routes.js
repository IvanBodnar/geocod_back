const express = require('express');
const streetFactory = require('../geocod/street_model');
const getStreets = require('../geocod/streets');

const router = express.Router();


router.get('/streets', (req, res, next) => {
    const streets = getStreets();
    streets
        .then(streets => res.send(streets));
});

router.get('/street/:name', (req, res, next) => {
    const street = streetFactory(req.params.name);
    street
        .then(street => res.send(street));
})

module.exports = router;
