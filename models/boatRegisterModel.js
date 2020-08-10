const mongoose = require('mongoose');

const PostSchema= new mongoose.Schema({
    licenceNo:{type: String, require:true},
    plate:{type:String, require:true},
    boatName:{type:String, require:true},
    portNameFromDb:{type:String, require:true},
    bindingNo:{type:String,require:true},
    boatTypeFromDb:{type:String,require:true},
    boatSize:{type:String,require:true},
    boatEngineFromDb:{type:String,require:true},
    boatHpFromDb:{type:String,require:true},
    ownerName:{type:String,require:true},
    ownerSurname:{type:String,require:true},
    ownerBirth:{type:Date,require:true},
    ownerId:{type:String,require:true},
    ownerAddress:{type:String,require:true},
    ownerPhoneNum:{type:String,require:true},
    groundInspectionDate:{type:Date,require:true},
    inspectionAttendant:{type:String,require:true},
    suitableForSea:{type:String,require:true},
    seaInspectionDate:{type:Date,require:true},
    blueCard:{type:String,require:true},
    inspectionValidityDate:{type:Date,require:true}
})

module.exports= mongoose.model('boatRegister',PostSchema)