import { connect } from 'mongoose';

export async function conexion(){
    await connect('mongodb://localhost/pruebaFoto', {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    });
    console.log('Exito en la conexion');
}