const { createUser, findUserByEmail } = require('../models/user');

const create = async (req, res) => {
    const data = req.body;

    try {
        const newUser = await createUser(data);
        res.status(201).json(newUser);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error al crear el usuario' });
    }
};

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (user && user.password === password) {
            const { password, ...userWithoutPassword } = user;
            res.status(200).json({ message: 'Login exitoso', user: userWithoutPassword });
        } else {
            res.status(401).json({ error: 'Credenciales inválidas' });
        }
    } catch (error) {
        console.error('Error al iniciar sesión:', error);
        res.status(500).json({ error: 'Error al iniciar sesión' });
    }
};

module.exports = { create, login };
