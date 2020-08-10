const mongoose = require('mongoose');

const PostSchema= new mongoose.Schema({
    coopName:{type: String, require:true},
    coopDesc:{type: String, require:true},
})

module.exports= mongoose.model('cooperativeDef',PostSchema)