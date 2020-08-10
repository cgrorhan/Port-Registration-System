const mongoose = require('mongoose');

const PostSchema= new mongoose.Schema({
    province:{type: String, require:true},
    portName:{type: String, require:true},
})


module.exports= mongoose.model('portRegister',PostSchema)