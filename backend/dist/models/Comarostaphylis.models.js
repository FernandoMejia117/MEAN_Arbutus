"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const comarostaphylisSchema = new mongoose_1.Schema({
    especie: { type: String, required: true },
    estado: { type: String, required: true },
    habito: { type: String, required: true },
    peciolosR: { type: String, required: true },
    hojasDT: { type: String, required: true },
    hojasAnchas: { type: String, required: true },
    hojasMargen: { type: String, required: true },
    hojasEnves: { type: String, required: true },
    inflorescencia: { type: String, required: true },
    flores: { type: String, required: true },
    imagen: { type: String, required: true }
});
exports.default = (0, mongoose_1.model)('especie2', comarostaphylisSchema);
