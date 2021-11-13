import {Request, Response} from 'express';
import path from 'path';
import Comarostaphylis from '../models/Comarostaphylis.models';
import fs from 'fs-extra';




export async function conseguirComarostaphyli(req: Request, res: Response): Promise<Response> {
   const { id } = req.params;
   const especie2 = await Comarostaphylis.findById(id);
   return res.json(especie2);
}

export async function conseguirComarostaphylis(req: Request, res: Response): Promise<Response> {
    const especie2 = await Comarostaphylis.find();
    return res.json(especie2);
}


export async function crearComarostaphylis(req: Request, res: Response): Promise<Response>{
    const {especie,estado,habito,peciolosR,hojasDT,hojasAnchas,hojasMargen,hojasEnves,inflorescencia,flores} = req.body;
    console.log(req.file?.path);
    const nuevoComarostaphylis = {
        especie: especie,
        estado: estado,
        habito: habito,
        peciolosR: peciolosR,
        hojasDT: hojasDT,
        hojasAnchas: hojasAnchas,
        hojasMargen: hojasMargen,
        hojasEnves: hojasEnves, 
        inflorescencia: inflorescencia,
        flores: flores,
        imagen: req.file?.path

    }
    const especie2 = new Comarostaphylis(nuevoComarostaphylis);
    await especie2.save();

    return res.json({
        message: 'Comarostaphylis Guardado Exitosamente'
    })
}


export async function actualizarComarostaphylis(req: Request, res: Response): Promise<Response> {
   
    const { id } = req.params;
    const {especie,estado,habito,peciolosR,hojasDT,hojasAnchas,hojasMargen,hojasEnves,inflorescencia,flores} = req.body;
    
    const actualizarComarostaphyli = await Comarostaphylis.findByIdAndUpdate(id, {
        especie,
        estado,
        habito,
        peciolosR,
        hojasDT,
        hojasAnchas,
        hojasMargen,
        hojasEnves,
        inflorescencia,
        flores
    }, {new: true});

    return res.json({
        message: 'Comarostaphylis actualizado' ,
        actualizarComarostaphyli
  
      })
    }




export async function eliminarComarostaphylis(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const especie2 = await Comarostaphylis.findByIdAndRemove(id);
    if(especie2){
        await fs.unlink(path.resolve(especie2.imagen))
    }
    return res.json({
      message: 'Comarostaphylis Eliminado' ,
      especie2

    })
}

