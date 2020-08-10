const mongoose = require('mongoose');

const PostSchema= new mongoose.Schema({
    title:{type: String, require:true},
    content:{type: String, require:true},
    date:{type:String, default:Date.now}
})

module.exports= mongoose.model('Post',PostSchema)