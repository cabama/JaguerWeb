// Controlador para los jugadores del equipo jaguer.
// En esta clase se cuencuentran todos los métodos que se pueden realizar con los jugadores.
// En modo de API Rest para facilitar posteriormente las comunicaciones.

// Imports
const express = require("express");
const app = express();
const Jugador = require(__models + 'mdJugadores')

// Clase que contiene como metodos los distintos controladores que se llamaran
// desde el fichero de ruta "rt_index"
var controlador = function () {

// RENDERS
// En este apartado se encontrarán los metodos controladores para cuando se quiera una vista.

    // JugadoresPagina: renderizará la página con los jugadores del equipo de jaguer.
	this.jugadoresPagina  = function (solicitud, respuesta)
	{
	    respuesta.render(__base+'views/pages/prueba',{ /*cosa: 'Guapitos C.F.' */ });
	};

// API REST
// En este apartado se encontraran las distintas API para controlar a los jugadores.

    // POST: Para cuando se quiera incluir un nuevo jugador
    this.nuevoJugador = function (req, res) {
        console.log('Estoy en el controlador de nuevo jugador');
        let jugador = new Jugador();
        jugador.nombre = req.body.nombre;
        jugador.apellido1 = req.body.apellido1;
        jugador.apellido2 = req.body.apellido2;
        jugador.edad = req.body.edad;
        jugador.email = req.body.email;
        jugador.save((error, jugadorGuardado) => {
        if (error) res.status(500).send('Todavía no esta montado la comunicación con la base de datos.');
            res.status(200).send({jugador: jugadorGuardado})
            console.log('Se ha guardado un nuevo jugador');
        })
    }; // nuevoJugador

    // GET: Para cuando se quiera consultar un jugador en concreto.
    this.consultarJugador = function (req, res) {
        if (req.body.id) {
            console.log('Has querido buscar a un jugador por su id');
        } else if (req.nombre && req.body.apellido) {
            console.log('Has querido buscar a un jugador por nombre');
        }
    }

    // PUT: Para cuando se quiera modificar un jugador
    this.modificarJugador = function (req, res) {
        console.log('Estoy en el controlador para modificar un jugador');
        let jugador =
    } // modificarJugador

    // DELETE: Para cuando se quiera eliminar un jugador.
    this.eliminarJugador = function (req, res) {

    }

}// clase

// Por ultimo exportamos la clase controlador para que pueda ser utilizada desde fuera.
module.exports = controlador;
