const express = require('express');

const router = express.Router();


router.get('/streets', (req, res, next) => {
    res.send('test');
});

module.exports = router;
