var express = require("express");
var app = express();
// Comprobamos que el login sea correcto.

// Si el login es correcto devolvemos las cookies.
// if () {}
// si no se mantiene en login.
// else(){}
// TODO


var login_controlador = function () {


	this.imprimir  = function ()
	{
		console.log("Me encuentro en el metodo de imprimir.")
	};

	this.comprobar_usuario_cookies = function ()
	{
		respuesta.session.user = 'carlosPrecioso';
	};


	this.generar_cookie_usuario  = function ()
	{
		// body...
	};


	this.controlador  = function (solicitud, respuesta)
	{
		var texto = "Hola ";
		console.log(respuesta.body);
		var nombre = JSON.stringify(respuesta.body);
		var texto = texto + nombre;
		respuesta.send();
	};


}


module.exports = login_controlador;