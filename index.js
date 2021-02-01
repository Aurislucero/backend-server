const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config')

//crear el servidor de express
const app = express();

//configurar cors
app.use(cors());

//Lectura y parseo del body
app.use(express.json());

//Base de datos
dbConnection();
console.log(process.env);
//credentials
// e0x7Lh0oBBr4hCx4
// mean_user


console.log(process.env);
//rutas
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    // console.log('corriendo en el puerto \x1b[32m%s\x1b[0m', 'online');
    console.log('corriendo en el puerto ' + process.env.PORT);

})