const express = require('express');
const router = express.Router();
const PostModel=require('../models/boatTypeDefModel')




router.get('/boats',(req,res)=>{
    PostModel.find({}).lean().then(boatDataFromDb=>{
        res.render('site/boatTypeDef',{boatDataFromDb:boatDataFromDb})
    })

    
})


router.get('/boats/edit/:id', (req,res)=>{
    PostModel.findOne({_id:req.params.id}).lean().then(postBoatTypeData =>{
        res.render("site/editeBoatType",{postBoatTypeData:postBoatTypeData})
    })
})

router.put('/boats/:id',(req,res)=>{
    PostModel.findOne({_id:req.params.id}).then(comingBoatTypeData=>{
        comingBoatTypeData.activeOrNot=req.body.activeOrNot
        comingBoatTypeData.description=req.body.description
        
        comingBoatTypeData.save().then(editedData=>{
            res.redirect('/boatTypeDefRoutes/boats')
        })
    })
})


router.post('/boats',(req,res)=>{
    PostModel.create(req.body)
    res.redirect('/boatTypeDefRoutes/boats')
})



router.delete('/boats/:id', (req,res)=>{
    PostModel.findByIdAndDelete(req.params.id).then(()=>{
        res.redirect('/boatTypeDefRoutes/boats')
    })
})

module.exports=router;