const express = require('express');
const router = express.Router();
const PostModel=require('../models/userRegModel');



router.get('/user',(req,res)=>{
    res.render('site/userRegister')

    
})

router.post('/user',(req,res)=>{
    PostModel.create(req.body)
    res.redirect('/index')
})

module.exports=router