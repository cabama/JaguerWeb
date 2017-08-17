/**
 * Este fichero crear las rutas que cuelgan de /
 * Para cada elemento nuevo se puede mandar directamente a la vista, al controlador o
 * a otro enrutador.
 */


// Cargamos el modulo para poder utilizar el enrutador de express
var express = require('express');
var app = express();
var router = express.Router();
var UserController = require('../controllers/users')
var jwt    = require('../services/jwt')


// PRIMERO Y CONDICION PARA ENTRAR EN EL RESTO DE PAGINAS
// ES QUE EL USUARIO TENGA LOGIN.

// Index, pagina por defecto.
router.get ("/", UserController.pruebas);
router.post("/user", UserController.newUser);
router.get ("/user/:id", UserController.getUser);
router.put ("/user/:id", UserController.newUser);
router.post("/login", UserController.loginUser);


// Respuesta al POST formulario de login.

router.get("/inicio", jwt.ensureAuth ,function (req, res){
	console.log('Se encuentra en el ingreso de la pagina.');
	console.log(req.user);
	res.status(200).send({message: 'Se encuentra en el ingreso de la pagina'})
});

module.exports = router;
