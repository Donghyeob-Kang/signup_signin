const express = require('express');
const router = express.Router();
const passport = require('passport');

// sign in
router.get('/', (req, res) => {
    res.render('sign/signin');
});

router.post(
    '/signin',
    passport.authenticate('local', { failureRedirect: '/sign' }),
    (req, res) => {
        res.redirect('/');
    }
);

router.get('/signup', (req, res) => {
    res.render('sign/signup');
});

module.exports = router;
