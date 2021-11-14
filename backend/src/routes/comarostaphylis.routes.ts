import {Router} from 'express';
const router = Router();

import {crearComarostaphylis, conseguirComarostaphyli, conseguirComarostaphylis,actualizarComarostaphylis,eliminarComarostaphylis} from '../controllers/Comarostaphylis.controller'

import multer from '../libs/multer'

router.route('/comarostaphylisI')
    .get(conseguirComarostaphylis)
    .post(multer.single('imagen'),crearComarostaphylis)
    

router.route('/comarostaphylisI/:id')
        .get(conseguirComarostaphyli)
        .delete( eliminarComarostaphylis)
        .put(actualizarComarostaphylis)

export default router;