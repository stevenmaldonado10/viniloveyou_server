const mongoose = require('mongoose')

const userSchema = mongoose.Schema({

    name:{type: String, required: true},
    email:{type: String, required: true, match:[/.+\@.+\..+/, 'Por favor ingrese un correo válido'] },
    address:{type: String, required: true},
    cellphone:{type: Number, required:true},
    password:{type: String, required: true, minlenght: [6, 'Password con mínimo 6 caracteres'] },
    address:{type: String, required: true },
    role:{type: String, required: true },
}

)

module.exports = mongoose.model('User', userSchema);