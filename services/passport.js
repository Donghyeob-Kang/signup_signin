const local = require('./localStrategy');

module.exports = passport => {
    passport.serializeUser((user, done) => {
        console.log('serial');
        done(null, user.user_id);
    });
    passport.deserializeUser((user_id, done) => {
        console.log('deserial');
        done(null, user_id);
    });
    local(passport);
};
