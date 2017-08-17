var express = require("express");
var modelo  = require( __base + "/models/personas.js" )
var app = express();

var controlador = function () {

	this.controlador  = function (solicitud, respuesta)
	{
	    respuesta.render(__base+'views/pages/prueba',{
	      //cosa: 'Guapitos C.F.'
	    });
	};

	this.controlador_post = function (solicitud, respuesta) {
		console.log('Nueva Persona')
		console.log(solicitud.body)
	}

	this.controlador_clementina = function (solicitud, respuesta) {
		respuesta.render(__base + 'views/pages/clementinaForm.ejs', {});
	}


	this.controlador_clementina_post = function (solicitud, respuesta) {
		//
		
	}

}


module.exports = controlador;
