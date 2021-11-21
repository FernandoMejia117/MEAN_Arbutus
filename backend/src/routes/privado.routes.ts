import { Router } from "express";
const router = Router();

import passport from 'passport'


router.get('/rutaPrivada', passport.authenticate('jwt',{ session: false}), (req,res) =>{
    res.send('EXITO')
})

export default router;