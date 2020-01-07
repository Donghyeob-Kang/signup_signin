const express = require('express');
const router = express.Router();
const authHandler = require('../services/authHandler');

router.get('/', authHandler.ensureAuth, (req, res) => {
    res.render('main/main');
});

module.exports = router;
