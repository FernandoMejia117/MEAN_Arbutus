"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EliminarFotos = exports.ActualizarFotos = exports.crearFoto = exports.conseguirFotos = exports.conseguirFoto = void 0;
const path_1 = __importDefault(require("path"));
const prueba_1 = __importDefault(require("../models/prueba"));
const fs_extra_1 = __importDefault(require("fs-extra"));
async function conseguirFoto(req, res) {
    const { id } = req.params;
    const foto = await prueba_1.default.findById(id);
    return res.json(foto);
}
exports.conseguirFoto = conseguirFoto;
async function conseguirFotos(req, res) {
    const fotos = await prueba_1.default.find();
    return res.json(fotos);
}
exports.conseguirFotos = conseguirFotos;
async function crearFoto(req, res) {
    var _a, _b;
    const { especie, estado, habito, corteza_ramas, corteza_ramillas, peciolos, hojas, flores } = req.body;
    console.log((_a = req.file) === null || _a === void 0 ? void 0 : _a.path);
    const nuevafoto = {
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
    const foto = new prueba_1.default(nuevafoto);
    await foto.save();
    return res.json({
        message: 'Foto Guardada'
    });
}
exports.crearFoto = crearFoto;
async function ActualizarFotos(req, res) {
    const { id } = req.params;
    const { especie, estado, habito, corteza_ramas, corteza_ramillas, peciolos, hojas, flores } = req.body;
    const actualizarFoto = await prueba_1.default.findByIdAndUpdate(id, {
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
        message: 'Foto actualizada',
        actualizarFoto
    });
}
exports.ActualizarFotos = ActualizarFotos;
/*
    if (req.body.especie = null) {
        req.body.especie = req.params.especie
    }
    if (req.body.estado = null) {
        req.body.estado = "stirng"
    }
*/
/*
madroñoCtrl.actualizarMadroño = function (req, res){
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.madroño) return res.status(404).send({message:'NO SE PUEDE ACTUALIZAR'});
    let madroñoObj = req.body.madroño[0];
    madroñoObj = Object.assign(madroñoObj,req.body);
    madroñoObj.save().then(madroñoAlta =>{
        res.status(200).send({message: 'Registro Actualizado',madroñoAlta});
    }).catch(error => res.status(500).send({error}));
}

*/
async function EliminarFotos(req, res) {
    const { id } = req.params;
    const foto = await prueba_1.default.findByIdAndRemove(id);
    if (foto) {
        await fs_extra_1.default.unlink(path_1.default.resolve(foto.imagen));
    }
    return res.json({
        message: 'Foto Eliminada',
        foto
    });
}
exports.EliminarFotos = EliminarFotos;
