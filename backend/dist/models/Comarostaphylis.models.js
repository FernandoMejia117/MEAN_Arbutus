"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const comarostaphylisSchema = new mongoose_1.Schema({
    especie: { type: String, required: true },
    estado: { type: String, required: true },
    habito: { type: String, required: true },
    pecíolos_ramillas: { type: String, required: true },
    hojas_Duración_textura: { type: String, required: true },
    hojas_Anchas: { type: String, required: true },
    hojas_Margen: { type: String, required: true },
    hojas_Envés: { type: String, required: true },
    inflorescencia: { type: String, required: true },
    flores: { type: String, required: true },
    imagen: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('especie2', comarostaphylisSchema);
