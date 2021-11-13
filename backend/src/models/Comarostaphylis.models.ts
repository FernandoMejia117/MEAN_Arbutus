import {Schema, model, Document} from 'mongoose';

const comarostaphylisSchema = new Schema ({
    especie: { type: String, required: true},
    estado: { type: String, required: true},
    habito: { type: String, required: true},
    peciolosR: {type: String, required: true},
    hojasDT: {type: String, required: true},
    hojasAnchas: {type: String, required: true},
    hojasMargen: { type: String , required: true},
    hojasEnves : { type: String, required: true},
    inflorescencia : { type: String, required: true},
    flores : { type: String, required: true},
    imagen: { type: String, required: true}
});

interface Icomarostaphylis extends Document{
    especie: string,
    estado:  string,
    habito:  string,
    peciolosR: string,
    hojasDT: string,
    hojasAnchas: string,
    hojasMargen: string,
    hojasEnves: string,
    inflorescencia: string,
    flores: string,
    imagen: string
}
export default model<Icomarostaphylis>('especie2', comarostaphylisSchema);