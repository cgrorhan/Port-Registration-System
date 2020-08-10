const express = require('express');
const router = express.Router();
const userDb=require("../models/userRegModel");



router.get('',(req,res)=>{
    res.render('site/loginPage',{layout:false})
    
})

router.post('',(req,res)=>{
        var mail=req.body.mail;
        var psw=req.body.psw
        console.log(mail,"-",psw)
    
        /*userDb.findOne({email:mail}, function(err, user){
            
            if(user){
                if(user.psw==psw){
                    req.session.userId=user._id
                    res.redirect("/index")
                }else{
                    res.redirect('')
                }
            }else{
                res.redirect('')
            }
        })*/
        res.redirect("/index")
        
})


router.get('/index',(req,res)=>{
    console.log("session Id:",req.session)
    res.render('site/index')
})



module.exports=router;