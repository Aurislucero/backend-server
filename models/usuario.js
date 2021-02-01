const { Schema, model } = require('mongoose')


const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true,
        // unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true,
        // unique: true,
    },
    img: {
        type: String,
        // required: false
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE',
        // enum: rolesValidos
    },
    google: {
        type: Boolean,
        default: false,
    },

});

// var rolesValidos= {
//     values: ['ADMIN_ROLE' , 'USER_ROLE'],
//     message: '{VALUE} no es un rol permitido'
// }
UsuarioSchema.method('toJSON', function() {
    const { __v, _id, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

// usuarioSchema.plugin(uniqueValidator, {message:' {PATH} El correo debe ser unico'})
// module.exports =mongoose.model('usuario',usuarioSchema)
module.exports = model('Usuario', UsuarioSchema)