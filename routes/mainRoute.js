const express = require('express');
const router = express.Router();
const jsonParser = express.json();

router.get('/', (req, res) => {
    res.render('main/main');
});

module.exports = router;
