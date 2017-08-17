// Aprendiendo node.js
// Fichero principal, se debe de arrancar con: node app.js
// Recordar npm install, por si no tenemos alguna dependencia instalada.
// Desarrollado por Carlos Barreiro Mata

// Introducimos los modulos que vamos a emplear:
const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

var config = require('./config/config.js');
// Inicializamos express
var app = express();

// Base de datos.
var db = config.database;
mongoose.connect(db, { useMongoClient: true });

// Configuramos bodyParser y Cokies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Ruta base del proyecto para que se accesible a modulos internos.
global.__base         = __dirname + '/';
global.__models       = __base + 'models/';
global.__controllers  = __base + 'controllers/';
global.__views        = __base + 'views/';

// Ponemos como motor de vistas el framework EJS.
app.set('view engine', 'ejs');

// Cargamos el fichero routers el cual dirigira segun URL.
var routers = require('./routes/rt_index.js');
app.use('/', routers);
app.use(express.static(__dirname + '/public'));

// Confguramos el puerto en el que estara disponible la appp
app.listen(8888);
