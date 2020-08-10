const express = require('express');
const router = express.Router();


router.get('/logOut',(req,res)=>{
  req.session.destroy(function(err) {
    console.log("error from session destroy: ",err)
    res.redirect('/')
  })
})

router.post('/logOut',(req,res)=>{
   
})

module.exports=router