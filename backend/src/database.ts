import mongoose, { ConnectionOptions} from 'mongoose';
import config from './config/config';

const dbOptions: ConnectionOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
 
};

mongoose.connect(config.DB.URI, dbOptions);

const connection = mongoose.connection;

connection.once('open', () => {
  console.log('Conexion con Mongodb Establecido');
});

connection.on('error', (err) => {
  console.log('Mongodb error con conexion:', err);
  process.exit();
});