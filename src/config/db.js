const mongoose = require('mongoose');

// Cadena de conexión a la base de datos MongoDB
const db_uri = `mongodb://localhost:27017/biblioteca`;

module.exports = () => {
    const connect = async () => {
        try {
            await mongoose.connect(db_uri, {
            });
            console.log('Conexión establecida correctamente');
        } catch (err) {
            console.error('Error al conectar a la base de datos:', err);
        }
    };
    connect();
};
