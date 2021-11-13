import express from 'express';
import morgan from 'morgan';
import path from 'path';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport'

import arbutusRoutes from './routes/arbutus.routes';
import comarostaphylisRoutes from './routes/comarostaphylis.routes';
import authRoutes from './routes/auth.routes';
import RutasPrivadas from './routes/privado.routes'

//inicializaciones
const app = express();

// Configuraciones 
app.set('port', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(passport.initialize());
passport.use(passportMiddleware);

// Routes
app.use('/api', arbutusRoutes,comarostaphylisRoutes, authRoutes);
//app.use('/Comarostaphylis', comarostaphylisRoutes);
app.get('/', (req, res) =>{
    res.send(`la api se encuentra en http://localhost:${app.get('port')}`);
});
//app.use('/apiLogin',authRoutes);
app.use(RutasPrivadas);



// Almacen de imagenes
app.use('/uploads', express.static(path.resolve('uploads')));

export default app;