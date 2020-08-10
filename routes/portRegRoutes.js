const express = require('express');
const router = express.Router();
const PostModel=require('../models/portRegModel');



router.get('/ports',(req,res)=>{
    PostModel.find({}).lean().then(portDataFromDb=>{
        res.render('site/portRegister',{portDataFromDb:portDataFromDb})
    })
    
})

router.post('/ports',(req,res)=>{
    PostModel.create(req.body)
    res.redirect('/portRegRoutes/ports')
})


router.get('/ports/edit/:id', (req,res)=>{

    PostModel.findOne({_id:req.params.id}).lean().then(postPortData =>{
        res.render("site/editPortRegister",{postPortData:postPortData})
    })
})

router.put('/ports/:id',(req,res)=>{
    PostModel.findOne({_id:req.params.id}).then(comingPortData=>{
        comingPortData.province=req.body.province
        comingPortData.portName=req.body.portName
        
        comingPortData.save().then(editedData=>{
            res.redirect('/portRegRoutes/ports')
        })
    })
})


router.delete('/ports/:id', (req,res)=>{
    PostModel.findByIdAndDelete(req.params.id).then(()=>{
        res.redirect('/portRegRoutes/ports')
    })
})

module.exports=router

