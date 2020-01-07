const express = require('express');
const router = express.Router();
const authHandler = require('../services/authHandler');

router.get('/', authHandler.signAuth, (req, res) => {
    res.render('main/main');
});

module.exports = router;
