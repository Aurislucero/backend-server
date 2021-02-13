const { Schema, model } = require('mongoose')


const HospitalSchema = Schema({
    nombre: {
        type: String,
        required: true,
        // unique: true
    },
    img: {
        type: String,
        // required: false
    },
    usuario: {
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
}, { collection: 'hospitales' });

// var rolesValidos= {
//     values: ['ADMIN_ROLE' , 'USER_ROLE'],
//     message: '{VALUE} no es un rol permitido'
// }
HospitalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

// usuarioSchema.plugin(uniqueValidator, {message:' {PATH} El correo debe ser unico'})
// module.exports =mongoose.model('usuario',usuarioSchema)
module.exports = model('Hospital', HospitalSchema)