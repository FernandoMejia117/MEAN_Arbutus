import {Request, Response} from 'express';
import path from 'path';
import Foto from '../models/prueba';
import fs from 'fs-extra';




export async function conseguirFoto(req: Request, res: Response): Promise<Response> {
   const { id } = req.params;
   const foto = await Foto.findById(id);
   return res.json(foto);
}

export async function conseguirFotos(req: Request, res: Response): Promise<Response> {
    const fotos = await Foto.find();
    return res.json(fotos);
}


export async function crearFoto(req: Request, res: Response): Promise<Response>{
    const {especie,estado,habito,corteza_ramas,corteza_ramillas,peciolos,hojas,flores} = req.body;
    console.log(req.file?.path);
    const nuevafoto = {
        especie: especie,
        estado: estado,
        habito: habito,
        corteza_ramas: corteza_ramas,
        corteza_ramillas: corteza_ramillas,
        peciolos: peciolos,
        hojas: hojas,
        flores: flores,
        imagen: req.file?.path

    }
    const foto = new Foto(nuevafoto);
    await foto.save();

    return res.json({
        message: 'Foto Guardada'
    })
}


export async function ActualizarFotos(req: Request, res: Response): Promise<Response> {
   
    const { id } = req.params;
    const {especie,estado,habito,corteza_ramas,corteza_ramillas,peciolos,hojas,flores} = req.body;
    
    const actualizarFoto = await Foto.findByIdAndUpdate(id, {
        especie,
        estado,
        habito,
        corteza_ramas,
        corteza_ramillas,
        peciolos,
        hojas,
        flores
    }, {new: true});

    return res.json({
        message: 'Foto actualizada' ,
        actualizarFoto
  
      })
    }


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

export async function EliminarFotos(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const foto = await Foto.findByIdAndRemove(id);
    if(foto){
        await fs.unlink(path.resolve(foto.imagen))
    }
    return res.json({
      message: 'Foto Eliminada' ,
      foto

    })
}

