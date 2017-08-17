
// Actualizamos información de algun usuario de la base de datos.

function postRadar (req, res)
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

module.exports = {
    postRadar
};
