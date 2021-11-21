"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eliminarArbutus = exports.actualizarArbutus = exports.crearArbutus = exports.conseguirArbutus = exports.conseguirArbutu = void 0;
const path_1 = __importDefault(require("path"));
const arbutus_models_1 = __importDefault(require("../models/arbutus.models"));
const fs_extra_1 = __importDefault(require("fs-extra"));
function conseguirArbutu(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const arbutu = yield arbutus_models_1.default.findById(id);
        return res.json(arbutu);
    });
}
exports.conseguirArbutu = conseguirArbutu;
function conseguirArbutus(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const arbutu = yield arbutus_models_1.default.find();
        return res.json(arbutu);
    });
}
exports.conseguirArbutus = conseguirArbutus;
function crearArbutus(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
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
        const arbutu = new arbutus_models_1.default(nuevoMadroño);
        yield arbutu.save();
        return res.json({
            message: 'Arbutus Guardado Exitosamente'
        });
    });
}
exports.crearArbutus = crearArbutus;
function actualizarArbutus(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { especie, estado, habito, corteza_ramas, corteza_ramillas, peciolos, hojas, flores } = req.body;
        const actualizarMadroño = yield arbutus_models_1.default.findByIdAndUpdate(id, {
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
            message: 'Madro actualizado',
            actualizarMadroño
        });
    });
}
exports.actualizarArbutus = actualizarArbutus;
function eliminarArbutus(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const arbutu = yield arbutus_models_1.default.findByIdAndRemove(id);
        if (arbutu) {
            yield fs_extra_1.default.unlink(path_1.default.resolve(arbutu.imagen));
        }
        return res.json({
            message: 'Madroño Eliminado',
            arbutu
        });
    });
}
exports.eliminarArbutus = eliminarArbutus;
