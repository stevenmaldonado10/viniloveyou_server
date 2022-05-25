const mongoose = require('mongoose')

const vinylSchema = mongoose.Schema({

    album:{type: String, required: true },
    artist:{type: String, required:true },
    price:{type: Number, required: true},
    genre:{type: String, required: true },
    image:{type: String, required: true },
}

)

module.exports = mongoose.model('Vinyl', vinylSchema);