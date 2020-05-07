var express = require('express');
var mongoose =require('mongoose')

//inicializar variables
var app = express();

//conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitaldb',(err,res)=>{
if(err) throw err;
console.log('corriendo en el puerto \x1b[32m%s\x1b[0m','online');
})

//rutas
app.get('/',(req,res,next)=>{
res.status(200).json({
    ok:true,
    msg:'correcto'
})
})

//escuchar petición

app.listen(3000,()=>{
console.log('corriendo en el puerto \x1b[32m%s\x1b[0m','online');

})