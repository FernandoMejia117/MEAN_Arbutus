import {Router} from 'express';
const router = Router();

import {crearArbutus, conseguirArbutu, conseguirArbutus,actualizarArbutus,eliminarArbutus} from '../controllers/arbutus.controller'

import multer from '../libs/multer'

router.route('/arbutusI')
    .get(conseguirArbutus)
    .post(multer.single('imagen'),crearArbutus)
    

router.route('/arbutusI/:id')
        .get(conseguirArbutu)
        .delete(eliminarArbutus)
        .put(actualizarArbutus)

export default router;