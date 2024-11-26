const mongoose = require('mongoose')

const connect = async () => {
    try {
        await mongoose.connect(process.env.URL_CONNECT, {
            useUnifiedTopology: true
        })
        console.log('Conexion exitosa a la BD');
    } catch (error) {
        console.error('🚀 ~ connect ~ error:', error)  
        process.exit(1)
    }
}

module.exports = connect