"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const arbutus_controller_1 = require("../controllers/arbutus.controller");
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/arbutusI')
    .get(arbutus_controller_1.conseguirArbutus)
    .post(multer_1.default.single('imagen'), arbutus_controller_1.crearArbutus);
router.route('/arbutusI/:id')
    .get(arbutus_controller_1.conseguirArbutu)
    .delete(arbutus_controller_1.eliminarArbutus)
    .put(arbutus_controller_1.actualizarArbutus);
exports.default = router;
