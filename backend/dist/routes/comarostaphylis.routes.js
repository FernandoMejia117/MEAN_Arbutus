"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const Comarostaphylis_controller_1 = require("../controllers/Comarostaphylis.controller");
const multer_1 = __importDefault(require("../libs/multer"));
router.route('/comarostaphylisI')
    .get(Comarostaphylis_controller_1.conseguirComarostaphylis)
    .post(multer_1.default.single('imagen'), Comarostaphylis_controller_1.crearComarostaphylis);
router.route('/comarostaphylisI/:id')
    .get(Comarostaphylis_controller_1.conseguirComarostaphyli)
    .delete(Comarostaphylis_controller_1.eliminarComarostaphylis)
    .put(Comarostaphylis_controller_1.actualizarComarostaphylis);
exports.default = router;
