const mongoose = require('mongoose');

const PostSchema= new mongoose.Schema({
    brand:{type: String, require:true},
    model:{type: String, require:true},
    hp:{type:String, require:true}
})

module.exports= mongoose.model('boatEngine',PostSchema)