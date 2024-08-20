const express = require("express");
const { connectDB } = require("./src/utils/db")
const env = require("dotenv")
const routerCharacters = require("./src/api/routes/character.routes")
env.config()

connectDB();
const server = express();
const PORT = process.env.PORT;

server.use(express.json());
server.use("/characters", routerCharacters)

server.listen(PORT, () => {
    console.log(`listen port http://localhost: ${PORT}`);
})

//modelos --> estructura de BD (colecciones),
//vistas --> routes
//controladores --> funcionalidad para acceder a la BD
//utils --> funciones de validaciones, conecciones de BD, middleware