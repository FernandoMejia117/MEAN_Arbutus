"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const foto_controller_1 = require("../controllers/foto.controller");
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/fotos')
    .get(foto_controller_1.conseguirFotos)
    .post(multer_1.default.single('imagen'), foto_controller_1.crearFoto);
router.route('/fotos/:id')
    .get(foto_controller_1.conseguirFoto)
    .delete(foto_controller_1.EliminarFotos)
    .put(foto_controller_1.ActualizarFotos);
exports.default = router;
