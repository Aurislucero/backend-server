const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { dbConnection } = require('./database/config')

//crear el servidor de express
const app = express();

//Base de datos
dbConnection();

//credentials
// 17y9nsM2eiT18qkY
// mean_user


console.log(process.env);
//rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'hola mundo'
    })
});

app.listen(process.env.PORT, () => {
    // console.log('corriendo en el puerto \x1b[32m%s\x1b[0m', 'online');
    console.log('corriendo en el puerto ' + process.env.PORT);

})