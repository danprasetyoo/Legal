const pool = require('../db');

const Admin = {
    findByUsername: async (username) => {
        const result = await pool.query('SELECT * FROM admins WHERE username = $1', [username]);
        return result.rows[0];
    },
};

module.exports = Admin;