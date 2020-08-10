const express = require('express');
const router = express.Router();
const PostModel=require('../models/cooperativeDefModel');


router.get('/cooperatives',(req,res)=>{
    PostModel.find({}).lean().then(coopDataFromDb=>{
        res.render('site/cooperativeDef',{coopDataFromDb:coopDataFromDb})
    })
    
})

router.post('/cooperatives',(req,res)=>{
    PostModel.create(req.body);
    res.redirect('/cooperativeDefRoutes/cooperatives')
})

router.get('/cooperatives/edit/:id', (req,res)=>{

    PostModel.findOne({_id:req.params.id}).lean().then(postCoopData =>{
        res.render("site/editCooperativeDef",{postCoopData:postCoopData})
    })
})

router.put('/cooperatives/:id',(req,res)=>{
    PostModel.findOne({_id:req.params.id}).then(comingCooperativeData=>{
        comingCooperativeData.coopName=req.body.coopName
        comingCooperativeData.coopDesc=req.body.coopDesc
        
        comingCooperativeData.save().then(editedData=>{
            res.redirect('/cooperativeDefRoutes/cooperatives')
        })
    })
})




router.delete('/cooperatives/:id', (req,res)=>{
    PostModel.findByIdAndDelete(req.params.id).then(()=>{
        res.redirect('/cooperativeDefRoutes/cooperatives')
    })
})

module.exports=router