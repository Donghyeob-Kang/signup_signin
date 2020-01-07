const pool = require('../services/database').pool;

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
