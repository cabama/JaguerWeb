// grab the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const jugadores = new Schema({
  nombre: String,
  apellido1: String,
  apellido2: String,
  email: String,
  edad: Number,
  posicion: {type: String, enum: ['Portero', 'Defensa', 'Lateral', 'Delantero']}
});

// the schema is useless so far
// we need to create a model using it
var Jugador = mongoose.model('Jugadores', jugadores);

// make this available to our users in our Node applications
module.exports = Jugador;
