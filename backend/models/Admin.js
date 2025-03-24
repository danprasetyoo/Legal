const pool = require('../db');

const Admin = {
    findByUsername: async (username, password) => {
        try {
            const result = await pool.query(
                'SELECT * FROM "Admin" WHERE username = $1 AND password = crypt($2, password)',
                [username, password]
            );
            return result.rows[0] || null;
        } catch (error) {
            console.error("Database error in findByUsername:", error.message, error.stack);
            throw new Error("Internal Server Error");
        }
    },
    createAdmin: async (username, email, password) => {
        try {
            const hashedPassword = await pool.query(
                'SELECT crypt($1, gen_salt(\'bf\')) AS hashed_password',
                [password]
            );
            await pool.query(
                'INSERT INTO "Admin" (username, email, password) VALUES ($1, $2, $3)',
                [username, email, hashedPassword.rows[0].hashed_password]
            );
        } catch (error) {
            console.error("Database error in createAdmin:", error.message, error.stack);
            throw new Error("Internal Server Error");
        }
    },
};

module.exports = Admin;