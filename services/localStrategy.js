const localStrategy = require('passport-local').Strategy;
const db = require('../db/signDB');

module.exports = passport => {
    passport.use(
        new localStrategy(
            {
                usernameField: 'id',
                passwordField: 'pwd',
                passReqToCallback: true
            },
            (req, id, pwd, done) => {
                if (!id || !pwd) {
                    return done(null, false);
                } else {
                    db.signin(id, pwd, result => {
                        if (result) {
                            if (result == '') {
                                return done(null, false);
                            } else {
                                user = { user_id: id };
                                return done(null, user);
                            }
                        } else {
                            return done(null, false);
                        }
                    });
                }
            }
        )
    );
};
