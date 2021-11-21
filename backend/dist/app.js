"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const passport_1 = __importDefault(require("passport"));
const passport_2 = __importDefault(require("./middlewares/passport"));
const arbutus_routes_1 = __importDefault(require("./routes/arbutus.routes"));
const comarostaphylis_routes_1 = __importDefault(require("./routes/comarostaphylis.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const privado_routes_1 = __importDefault(require("./routes/privado.routes"));
//inicializaciones
const app = (0, express_1.default)();
// Configuraciones 
app.set('port', process.env.PORT || 4000);
// middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
app.use(passport_1.default.initialize());
passport_1.default.use(passport_2.default);
// Routes
app.use('/api', arbutus_routes_1.default, comarostaphylis_routes_1.default, auth_routes_1.default);
//app.use('/Comarostaphylis', comarostaphylisRoutes);
app.get('/', (req, res) => {
    res.send(`la api se encuentra en http://localhost:${app.get('port')}`);
});
//app.use('/apiLogin',authRoutes);
app.use(privado_routes_1.default);
// Almacen de imagenes
app.use('/uploads', express_1.default.static(path_1.default.resolve('uploads')));
exports.default = app;
