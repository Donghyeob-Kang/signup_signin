const express = require('express');
const router = express.Router();
const passport = require('passport');
const db = require('../db/signDB');

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

// sign up
router.get('/signup', (req, res) => {
    res.render('sign/signup');
});

router.post('/signup', (req, res, next) => {
    const id = req.body.id;
    const pwd = req.body.pwd;
    const name = req.body.name;

    if (id && pwd && name) {
        db.signup(id, pwd, name, result => {
            console.log('가입 ㅊㅋㅊㅋ');
            res.redirect('/');
        });
    } else {
        res.redirect('signup');
    }
});

module.exports = router;
