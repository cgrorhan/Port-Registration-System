const express = require('express');
const router = express.Router();
const PostModel=require('../models/boatRegisterModel');
const portDataFromDb=require('../models/portRegModel');
const boatTypeDataFromDb=require('../models/boatTypeDefModel');
const boatEngineDataFromDb=require('../models/boatEngineModel');
const QRCode = require('qrcode')


router.get('/boats',(req,res)=>{
    PostModel.find({}).lean().then(boatRegData =>{
        portDataFromDb.find({}).lean().then(portData =>{
            boatTypeDataFromDb.find({activeOrNot:"active"}).lean().then(boatTypeData =>{
                boatEngineDataFromDb.find({}).lean().then(boatEngineData =>{
                    res.render('site/boatRegister',{boatRegData:boatRegData,portData:portData,boatTypeData:boatTypeData,boatEngineData:boatEngineData})
                })
            })
        })
    })        

})

router.post('/boats',(req,res)=>{
    PostModel.create(req.body)      
    res.redirect('/boatRegRoutes/boats')
})

router.delete('/boats/:id', (req,res)=>{
    PostModel.findByIdAndDelete(req.params.id).then(()=>{
        res.redirect('/boatRegRoutes/boats')
    })
})

router.get('/boats/edit/:id', (req,res)=>{
    PostModel.findOne({_id:req.params.id}).lean().then(postBoatRegData =>{
        portDataFromDb.find({}).lean().then(portData=>{
            boatTypeDataFromDb.find({activeOrNot:"active"}).lean().then(boatTypeData=>{
                boatEngineDataFromDb.find({}).lean().then(boatEngineData =>{
                    var idStringFormat=req.params.id.toString();
                    QRCode.toFile("public/qrcodeImages/"+postBoatRegData._id+".png",idStringFormat,{width:500})
                    res.render("site/editBoatRegister",{postBoatRegData:postBoatRegData,portData:portData,boatTypeData:boatTypeData,boatEngineData:boatEngineData})
                })
            })
        })
    })
})
router.put('/boats/:id',(req,res)=>{
    PostModel.findOne({_id:req.params.id}).then(comingBoatRegData=>{
        //take port data according to the its id
        comingBoatRegData.licenceNo=req.body.licenceNo
        comingBoatRegData.plate=req.body.plate
        comingBoatRegData.boatName=req.body.boatName
        comingBoatRegData.portNameFromDb=req.body.portNameFromDb
        comingBoatRegData.bindingNo=req.body.bindingNo
        comingBoatRegData.boatTypeFromDb=req.body.boatTypeFromDb
        comingBoatRegData.boatSize=req.body.boatSize
        comingBoatRegData.boatEngineFromDb=req.body.boatEngineFromDb
        comingBoatRegData.boatHpFromDb=req.body.boatHpFromDb
        comingBoatRegData.ownerName=req.body.ownerName
        comingBoatRegData.ownerSurname=req.body.ownerSurname
        comingBoatRegData.ownerBirth=req.body.ownerBirth
        comingBoatRegData.ownerId=req.body.ownerId
        comingBoatRegData.ownerAddress=req.body.ownerAddress
        comingBoatRegData.ownerPhoneNum=req.body.ownerPhoneNum
        comingBoatRegData.groundInspectionDate=req.body.groundInspectionDate
        comingBoatRegData.inspectionAttendant=req.body.inspectionAttendant
        comingBoatRegData.suitableForSea=req.body.suitableForSea
        comingBoatRegData.seaInspectionDate=req.body.seaInspectionDate
        comingBoatRegData.blueCard=req.body.blueCard
        comingBoatRegData.inspectionValidityDate=req.body.inspectionValidityDate
        
        
        comingBoatRegData.save().then(editedData=>{
            res.redirect('/boatRegRoutes/boats')
        })
        
    })
})

module.exports=router    