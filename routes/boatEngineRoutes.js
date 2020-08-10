const express = require('express');
const router = express.Router();
const PostModel = require('../models/boatEngineModel');



router.get('/engineData', (req, res) => {

    PostModel.find({}).lean().then(engineDataFromDb => {
        res.render('site/boatEngine', { engineDataFromDb: engineDataFromDb })
    })
})



router.get('/engineData/edit/:id', (req, res) => {
    PostModel.findOne({ _id: req.params.id }).lean().then(postEngineData => {
        res.render("site/editBoatEngine", { postEngineData: postEngineData })
    })
})

router.put('/engineData/:id', (req, res) => {
    PostModel.findOne({ _id: req.params.id }).then(comingBoatEngineData => {
        comingBoatEngineData.brand = req.body.brand
        comingBoatEngineData.model = req.body.model
        comingBoatEngineData.hp = req.body.hp

        comingBoatEngineData.save().then(editedData => {
            res.redirect('/boatEngineRoutes/engineData')
        })
    })
})


router.post('/engineData', (req, res) => {
    PostModel.create(req.body)
    res.redirect('/boatEngineRoutes/engineData')
})


router.delete('/engineData/:id', (req, res) => {
    PostModel.findByIdAndDelete(req.params.id).then(() => {
        res.redirect('/boatEngineRoutes/engineData')
    })
})

module.exports = router;