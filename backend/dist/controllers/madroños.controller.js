"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarMadroño = exports.ActualizarMadroño = exports.crearMadroño = exports.conseguirMadroños = exports.conseguirMadroño = void 0;
const path_1 = __importDefault(require("path"));
const madro_os_models_1 = __importDefault(require("../models/madro\u00F1os.models"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function conseguirMadroño(req, res) {
    const { id } = req.params;
    const madroño = await madro_os_models_1.default.findById(id);
    return res.json(madroño);
}
exports.conseguirMadroño = conseguirMadroño;
async function conseguirMadroños(req, res) {
    const madroños = await madro_os_models_1.default.find();
    return res.json(madroños);
}
exports.conseguirMadroños = conseguirMadroños;
async function crearMadroño(req, res) {
    var _a, _b;
    const { especie, estado, habito, corteza_ramas, corteza_ramillas, peciolos, hojas, flores } = req.body;
    console.log((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
    const nuevoMadroño = {
        especie: especie,
        estado: estado,
        habito: habito,
        corteza_ramas: corteza_ramas,
        corteza_ramillas: corteza_ramillas,
        peciolos: peciolos,
        hojas: hojas,
        flores: flores,
        imagen: (_b = req.file) === null || _b === void 0 ? void 0 : _b.path
    };
    const madroño = new madro_os_models_1.default(nuevoMadroño);
    await madroño.save();
    return res.json({
        message: 'Madroño Guardado Exitosamente'
    });
}
exports.crearMadroño = crearMadroño;
async function ActualizarMadroño(req, res) {
    const { id } = req.params;
    const { especie, estado, habito, corteza_ramas, corteza_ramillas, peciolos, hojas, flores } = req.body;
    const actualizarMadroño = await madro_os_models_1.default.findByIdAndUpdate(id, {
        especie,
        estado,
        habito,
        corteza_ramas,
        corteza_ramillas,
        peciolos,
        hojas,
        flores
    }, { new: true });
    return res.json({
        message: 'Madroño actualizado',
        actualizarMadroño
    });
}
exports.ActualizarMadroño = ActualizarMadroño;
async function EliminarMadroño(req, res) {
    const { id } = req.params;
    const madroño = await madro_os_models_1.default.findByIdAndRemove(id);
    if (madroño) {
        await fs_extra_1.default.unlink(path_1.default.resolve(madroño.imagen));
    }
    return res.json({
        message: 'Madroño Eliminado',
        madroño
    });
}
exports.EliminarMadroño = EliminarMadroño;
