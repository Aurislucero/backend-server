var express = require('express');
var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');

var mdAutenticacion = require('../middlewares/autenticacion');

//Inicializar variables
var app = express();
var Usuario = require('../models/usuario');



//===========================================
// obtener toodos los usuarios
//===========================================

app.get('/', (req, res, next) => {
    Usuario.find({}, 'nombre email img role')
    .exec(
        (err, usuario) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'Error cargando usuario',
                errors: err
            })
        }
        res.status(200).json({
            ok: true,
            usuario: usuario
        })
    })


})




//===========================================
// Actualizar un usuario
//=========================================== 
app.put('/:id',mdAutenticacion.verificatoken, (req, res) => {
    var id = req.params.id
    var body = req.body

    Usuario.findById( id, (err, usuario) => {

        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'error al buscar usuario',
                errors: err
            });
        }

        if (!usuario) {
            return res.status(400).json({
                ok: false,
                mensaje: 'el usuario con el id ' + id + ' no existe',
                errors: { message: 'no existe un usuario con ese id' }
            });
        }
        usuario.nombre = body.nombre;
        usuario.email = body.email;
        usuario.role = body.role;

        usuario.save((err, usuarioGuardado) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    mensaje: 'error al actualizar usuario',
                    errors: err
                });
            }
            usuarioGuardado.password=':)'

            res.status(200).json({
                ok: true,
                usuario: usuarioGuardado
            })
        })

    })

})


//===========================================
// Crear un nuevo usuario
//=========================================== 

app.post('/',mdAutenticacion.verificatoken ,(req, res) => {
    var body = req.body;

    var usuario = new Usuario({
        nombre: body.nombre,
        email: body.email,
        password: bcrypt.hashSync(body.password, 10),
        img: body.img,
        role: body.role
    })
    usuario.save((err, usuarioGuardado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                mensaje: 'error al crear usuario',
                errors: err
            });
        }

        res.status(201).json({
            ok: true,
            usuario: usuarioGuardado,
            usuariotoken:req.usuario
        })
    });

})


//===========================================
// Eliminar un usuario
//=========================================== 
app.delete('/:id',mdAutenticacion.verificatoken,(req,res)=>{
    var id = req.params.id

    Usuario.findByIdAndRemove(id,(err, usuarioBorrado)=>{
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'error al borrar usuario',
                errors: err
            });
        }

        res.status(200).json({
            ok: true,
            usuario: usuarioBorrado
        })
    })

})


module.exports = app;

