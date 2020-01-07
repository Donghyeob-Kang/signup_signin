const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('sign/signin');
});

router.get('/signup', (req, res) => {
    res.render('sign/signup');
});

module.exports = router;
