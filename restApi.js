const express = require('express');
const router = express.Router();
const userData=require('./models/userRegModel');
const boatData=require('./models/boatRegisterModel');


router.post('/', function (req, res) {
    userData.findOne({email:req.body.emailMobil}).then(users =>{
      if(users){
        console.log(" email match")
        if(users.psw==req.body.pswMobil){
          console.log(" password match")
          res.status(200).json({
              data:true
          });
        }else{
          res.status(200).json({
            data:false
          });
        }
      }else{
        console.log("not match!!")
        res.status(200).json({
          data:false
          
        });
      }
      
    })
 

});

router.post('/boatData/:id',function(req,res,next){
  boatData.findOne({_id:req.params.id}).lean().then(boat=>{
    if(boat){
      res.status(200).json({
        boatdata:boat
      });
    }else{
      res.status(200).json({
        boatdata:null
      });
    }
  })
});


  module.exports=router;