var jwt    = require ('jwt-simple');
var moment = require('moment');
var secret = 'Clave secreta del token';

exports.createToken = function (user) {
	var payload = {
		sub: user.__id,
		username: user.username,
		name: user.name,
		surname: user.surname,
		email: user.email,
		role: user.role,
		image: user.image,
		iat: moment.unix(),
		exp: moment().add(30, 'days').unix
	};

	return jwt.encode(payload, secret);
}


exports.ensureAuth = function (req, res, next) 
{
	if (!req.headers.authoritation){
		return res.status(403).send({message: 'La peticion no tiene la cabecera de autenticación'});
	}

	var token = req.headers.authoritation.replace(/['"]+/g, '');

	try{
		var payload = jwt.decode(token, secret);

		if (payload.exp <= moment().unix()){
			return res.status(401).send({message: 'El token ha expirado'});
		}
	} catch (ex) {
		console.log(ex);
		return res.status(404).send({message: 'Token no valido.'})
	}

	req.user = payload;

	next();
}  