import {Request, Response} from 'express';
import path from 'path';
import Arbutus from '../models/arbutus.models';
import fs from 'fs-extra';




export async function conseguirArbutu(req: Request, res: Response): Promise<Response> {
   const { id } = req.params;
   const arbutu = await Arbutus.findById(id);
   return res.json(arbutu);
}

export async function conseguirArbutus(req: Request, res: Response): Promise<Response> {
    const arbutu = await Arbutus.find();
    return res.json(arbutu);
}


export async function crearArbutus(req: Request, res: Response): Promise<Response>{
    const {especie,estado,habito,corteza_ramas,corteza_ramillas,peciolos,hojas,flores} = req.body;
    console.log(req.file?.path);
    const nuevoMadroño = {
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
    const arbutu = new Arbutus(nuevoMadroño);
    await arbutu.save();

    return res.json({
        message: 'Arbutus Guardado Exitosamente'
    })
}


export async function actualizarArbutus(req: Request, res: Response): Promise<Response> {
   
    const { id } = req.params;
    const {especie,estado,habito,corteza_ramas,corteza_ramillas,peciolos,hojas,flores} = req.body;
    
    const actualizarMadroño = await Arbutus.findByIdAndUpdate(id, {
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
        message: 'Madro actualizado' ,
        actualizarMadroño
  
      })
    }




export async function eliminarArbutus(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const arbutu = await Arbutus.findByIdAndRemove(id);
    if(arbutu){
        await fs.unlink(path.resolve(arbutu.imagen))
    }
    return res.json({
      message: 'Madroño Eliminado' ,
      arbutu

    })
}

