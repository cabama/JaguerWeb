var bcrypt = require('bcrypt-nodejs')
var User   = require('../models/users')
var jwt    = require('../services/jwt')

function pruebas (req, res) {
  res.send({
    message: 'Probando el controlador pruebas',
    usuario: req.user
  })
}


// Creamos un nuevo usuario en la base de datos.

function newUser(req, res)
{
    var user = new User();
    var params   = req.body;

    user.username = params.username;
    user.name     = params.name;
    user.surname  = params.surname;
    user.email    = params.email.toLowerCase();
    user.role     = 'ROLE_USER';
    user.image    = 'null';

    if (params.password){
        console.log('Estoy dentro')
        console.log(user)
        //encriptar contraseña y guardar datos.
        //res.status(200).send({message: 'Parece que si que hay contraseña.'})
        bcrypt.hash(params.password, null, null, (err, hash) => {
            user.password = hash;
            user.save( (err, userStored) => {
                if (err) {
                    console.log(err);
                    res.status(500).send('Fallo al guardar el usuario, no todos los campos se encuentran disponibles');
                } else {
                    res.status(200).send({user: userStored})
                }
            });
        }); 
    }
}

// Actualizamos información de algun usuario de la base de datos.

function updateUser (req, res)
{
    var params   = req.body;
    
    User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
        if (err){
            res.status(500).send({message: 'Error al actualizar el usuario.'});
        } else {
            if (!userUpdate){
                res.status(400).send({message: 'No se ha podido actualizar el usuario.'});
            } else {
                res.status(200).send({user: userUpdate})
            }
        }
    });
}

// Comprobamos que el registro de usuario.

function loginUser (req, res)
{
    var params   = req.body;
    var email    = params.email;
    var password = params.password;

    User.findOne({email: email.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500).send({message: 'Error en la peticion.'});
        } else {
            if (!user){
                res.status(404).send({message: 'El usuario no existe.'});
            }
            else{
                // Comprobamos la contraseña
                bcrypt.compare(password, user.password, function (err, check) {
                    if(check){
                        //devolver los datos del usuario logueado.
                        if (params.getHash){
                            // devolvemos el token jwt
                            res.status(200).send({token: jwt.createToken(user)})
                        } else {
                            // devolvemos el usuario entero
                            res.status(200).send({user})
                        }
                    } else {
                        res.status(404).send({message: 'El usuario no ha podido loguearse.'})
                    }
                })
            }
        }
    })
}


// Obtenemos información del usuario.
function getUser(req, res)
{
    id = req.params.id;
    User.findById(id, (err, user) => {
        if (err){
            res.status(500).send({message: 'Error obteniendo el usuario'})
        } else {
            res.status(200).send({user: user})
        }
    });
}

// Borramos un usuario de la base de datos.

function deleteUser()
{

}

module.exports = {
  pruebas,
  newUser,
  updateUser,
  loginUser,
  getUser,
  deleteUser
};
