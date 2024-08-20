const mongoose = require("mongoose");
//antes del signo de interrogacion pongo el nombre de la BD

const connectDB = async () => {

    try {
        const db = await mongoose.connect(process.env.DB_URL);
        const { name, host } = db.connection;
        console.log(`Nombre de la ${name} y servidor ${host}`);
    } catch (error) {
        console.log(error);
    }
}

module.exports = { connectDB }