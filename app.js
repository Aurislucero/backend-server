var express = require('express');
var mongoose =require('mongoose');
var bodyParser = require('body-parser');

//inicializar variables
var app = express();


//Body Parser
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//importar rutas
 var appRoutes= require('./routes/app');
 var usuarioRoutes= require('./routes/usuario');
 var loginRoutes= require('./routes/login');

//conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitaldb',(err,res)=>{
if(err) throw err;
console.log('corriendo en el puerto \x1b[32m%s\x1b[0m','online');
})


//rutas
app.use('/usuario',usuarioRoutes);
app.use('/login',loginRoutes)
app.use('/',appRoutes);

//escuchar petición

app.listen(3000,()=>{
console.log('corriendo en el puerto \x1b[32m%s\x1b[0m','online');

})