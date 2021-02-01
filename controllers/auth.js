const { response } = require('express');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const { generarJWT } = require('../helpers/jwt')

const login = async(req, res = response) => {

    const { email, password } = req.body

    try {
        //verificar email
        const usuarioDB = await Usuario.findOne({ email });
        if (!usuarioDB) {
            res.status(404).json({
                ok: false,
                msg: 'Email no encontrado'
            });
        }

        //verificar password
        const validPassword = bcrypt.compareSync(password, usuarioDB.password);

        if (!validPassword) {
            res.status(404).json({
                ok: false,
                msg: 'Contraseña no válida'
            });
        }

        //generar el token -jwt
        const token = await generarJWT(usuarioDB.id)

        res.json({
            ok: true,
            token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Hable con su administrador'
        })
    }
}

module.exports = {
    login
}