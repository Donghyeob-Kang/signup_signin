const pool = require('../services/database').pool;

// sign in
module.exports.signin = (id, pwd, callback) => {
    pool.getConnection((e, connection) => {
        if (!e) {
            const query =
                'SELECT * FROM tbl_user WHERE user_id = ? AND user_pwd = ?;';
            connection.query(query, [id, pwd], (e, result) => {
                connection.release();

                if (!e) {
                    callback(result);
                } else {
                    callback(false);
                    return;
                }
            });
        }
    });
};

// sign up
module.exports.signup = (id, pwd, name, callback) => {
    pool.getConnection((e, connection) => {
        if (!e) {
            const query =
                'INSERT INTO tbl_user (user_id, user_pwd, user_name) VALUES (?, ?, ?);';
            connection.query(query, [id, pwd, name], (e, result) => {
                connection.release();

                if (!e) {
                    callback(result);
                } else {
                    callback(false);
                    return;
                }
            });
        }
    });
};
