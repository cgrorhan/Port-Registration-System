const mongoose = require('mongoose');

const PostSchema= new mongoose.Schema({
    email:{type: String, require:true},
    name:{type: String, require:true},
    surname:{type:String, require:true},
    psw:{type: String, require:true},
    psw_repeat:{type:String, require:true},
    authorize:{type:String,read:true}
})

module.exports= mongoose.model('userRegister',PostSchema)