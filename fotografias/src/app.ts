import express from 'express';
import morgan from 'morgan';
import path from 'path';

const app = express();

import indexRoutes from './routes/index';

// Configuraciones 
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// Routes
app.use('/api', indexRoutes);

// Almacen de imagenes
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;