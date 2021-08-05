"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conexion = void 0;
const mongoose_1 = require("mongoose");
async function conexion() {
    await mongoose_1.connect('mongodb://localhost/pruebaFoto', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log('Exito en la conexion');
}
exports.conexion = conexion;
