const mongoose = require("mongoose")

const Schema =  new mongoose.Schema({
    no:{
        type:Number
    },
    judul : {
        type : String,
        require : [true,'judul harus di isi'],
        trim : true
    },
    penerbit: {
        type:String,
        require : [true,'penerbit harus di isi'],
        trim : true
    },
    genre : {
        type:String,
        require : [true,'genre harus di isi'],
        trim : true
    },
    harga : {
        type: Number,
        require : [true,'harga harus di isi'],
    }
})
const crud = mongoose.model('crud',Schema)
module.exports = crud;