const express = require('express')
const cors = require('cors')
const app = express();
const port = 3000;

const userRoutes = require('./routes/user');

app.use(cors(
    {
        origin: '*'
    }
))

app.use(express.json());
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    // res.send('Hola a todos en el frontend!')
    res.json({ message: 'Hola a todos desde el backend!' })
})

// app.listen(console.log('Escuchando desde el puerto: ' + port));
app.listen(port, () => {
    console.log(`Escuchando desde el puerto: ${port}`)
})