const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')

// Conexion a DB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/rest_api',{
    useNewUrlParser: true
})

// Crear el servidor
const app = express();
app.use(cors())

// Habilitar body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Rutas de la app
app.use('/', routes())


// Puerto
app.listen(5000)