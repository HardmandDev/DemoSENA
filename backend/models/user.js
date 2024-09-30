const pool = require('../db');

const createUser = async (data) => {
    const client = await pool.connect();
    try {
        const { name, last_name, email, password } = data;
        const result = await client.query(
            `INSERT INTO users (name, last_name, email, password) 
             VALUES ($1, $2, $3, $4) RETURNING *`,
            [name, last_name, email, password]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error al CREAR el usuario:', error);
        throw error;
    } finally {
        client.release();
    }
};

const findUserByEmail = async (email) => {
    const client = await pool.connect();
    try {
        const result = await client.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        );
        return result.rows[0];
    } catch (error) {
        console.error('Error al ENCONTRAR el usuario:', error);
        throw error;
    } finally {
        client.release();
    }
};

module.exports = { createUser, findUserByEmail };
