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
exports.eliminarComarostaphylis = exports.actualizarComarostaphylis = exports.crearComarostaphylis = exports.conseguirComarostaphylis = exports.conseguirComarostaphyli = void 0;
const path_1 = __importDefault(require("path"));
const Comarostaphylis_models_1 = __importDefault(require("../models/Comarostaphylis.models"));
const fs_extra_1 = __importDefault(require("fs-extra"));
function conseguirComarostaphyli(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const especie2 = yield Comarostaphylis_models_1.default.findById(id);
        return res.json(especie2);
    });
}
exports.conseguirComarostaphyli = conseguirComarostaphyli;
function conseguirComarostaphylis(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const especie2 = yield Comarostaphylis_models_1.default.find();
        return res.json(especie2);
    });
}
exports.conseguirComarostaphylis = conseguirComarostaphylis;
function crearComarostaphylis(req, res) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const { especie, estado, habito, peciolosR, hojasDT, hojasAnchas, hojasMargen, hojasEnves, inflorescencia, flores } = req.body;
        console.log((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
        const nuevoComarostaphylis = {
            especie: especie,
            estado: estado,
            habito: habito,
            peciolosR: peciolosR,
            hojasDT: hojasDT,
            hojasAnchas: hojasAnchas,
            hojasMargen: hojasMargen,
            hojasEnves: hojasEnves,
            inflorescencia: inflorescencia,
            flores: flores,
            imagen: (_b = req.file) === null || _b === void 0 ? void 0 : _b.path
        };
        const especie2 = new Comarostaphylis_models_1.default(nuevoComarostaphylis);
        yield especie2.save();
        return res.json({
            message: 'Comarostaphylis Guardado Exitosamente'
        });
    });
}
exports.crearComarostaphylis = crearComarostaphylis;
function actualizarComarostaphylis(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { especie, estado, habito, peciolosR, hojasDT, hojasAnchas, hojasMargen, hojasEnves, inflorescencia, flores } = req.body;
        const actualizarComarostaphyli = yield Comarostaphylis_models_1.default.findByIdAndUpdate(id, {
            especie,
            estado,
            habito,
            peciolosR,
            hojasDT,
            hojasAnchas,
            hojasMargen,
            hojasEnves,
            inflorescencia,
            flores
        }, { new: true });
        return res.json({
            message: 'Comarostaphylis actualizado',
            actualizarComarostaphyli
        });
    });
}
exports.actualizarComarostaphylis = actualizarComarostaphylis;
function eliminarComarostaphylis(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const especie2 = yield Comarostaphylis_models_1.default.findByIdAndRemove(id);
        if (especie2) {
            yield fs_extra_1.default.unlink(path_1.default.resolve(especie2.imagen));
        }
        return res.json({
            message: 'Comarostaphylis Eliminado',
            especie2
        });
    });
}
exports.eliminarComarostaphylis = eliminarComarostaphylis;
