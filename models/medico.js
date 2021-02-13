const { Schema, model } = require('mongoose')


const MedicoSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    img: {
        type: String,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },
    hospital: {
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true

    },
});

// var rolesValidos= {
//     values: ['ADMIN_ROLE' , 'USER_ROLE'],
//     message: '{VALUE} no es un rol permitido'
// }
MedicoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

// usuarioSchema.plugin(uniqueValidator, {message:' {PATH} El correo debe ser unico'})
// module.exports =mongoose.model('usuario',usuarioSchema)
module.exports = model('Medico', MedicoSchema)