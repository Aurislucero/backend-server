var mongoose = require('mongoose');
const dbConnection = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopo: true

        });
    } catch (error) {
        throw new Error('Error al iniciar la base de datos ver logs')
    }

}

module.exports = {
    dbConnection
}