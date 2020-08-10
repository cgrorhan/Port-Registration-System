const mongoose = require('mongoose');

const PostSchema= new mongoose.Schema({
    activeOrNot:{type: String, require:true},
    description:{type: String, require:true},
})

module.exports= mongoose.model('boatTypeDef',PostSchema)