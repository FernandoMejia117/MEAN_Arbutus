import {Schema, model, Document} from 'mongoose';

const arbutusSchema = new Schema ({
    especie: { type: String, required: true},
    estado: { type: String, required: true},
    habito: { type: String, required: true},
    corteza_ramas: {type: String, required: true},
    corteza_ramillas: {type: String, required: true},
    peciolos: {type: String, required: true},
    hojas: { type: String , required: true},
    flores: { type: String, required: true},
    imagen: { type: String, required: true}
});

interface Iarbutus extends Document{
    especie: string,
    estado:  string,
    habito:  string,
    corteza_ramas: string,
    corteza_ramillas: string,
    peciolos: string,
    hojas: string,
    flores: string,
    imagen: string
}
export default model<Iarbutus>('arbutus', arbutusSchema);