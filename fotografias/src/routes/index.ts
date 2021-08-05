import {Router} from 'express';
const router = Router();

import {crearFoto, conseguirFoto, conseguirFotos,EliminarFotos,ActualizarFotos} from '../controllers/foto.controller'

import multer from '../libs/multer'

router.route('/fotos')
    .get(conseguirFotos)
    .post(multer.single('imagen'),crearFoto)
    

router.route('/fotos/:id')
        .get(conseguirFoto)
        .delete(EliminarFotos)
        .put(ActualizarFotos)

export default router;