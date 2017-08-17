// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var userSchema = new Schema({
  username: {type:String, required: true, unique: true},
  email: 	{ type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: 	String,
  surname: 	String,
  role: 	String,
  image: 	String
});

// the schema is useless so far
// we need to create a model using it
module.exports = mongoose.model('Users', userSchema);
