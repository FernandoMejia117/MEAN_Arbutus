"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const arbutusSchema = new mongoose_1.Schema({
    especie: { type: String, required: true },
    estado: { type: String, required: true },
    habito: { type: String, required: true },
    corteza_ramas: { type: String, required: true },
    corteza_ramillas: { type: String, required: true },
    peciolos: { type: String, required: true },
    hojas: { type: String, required: true },
    flores: { type: String, required: true },
    imagen: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('arbutus', arbutusSchema);
