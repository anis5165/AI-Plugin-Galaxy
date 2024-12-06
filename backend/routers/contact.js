const express = require('express');
const router = express.Router();
const Model = require('../models/contact')

router.post('/add', (req,res) => {
    console.log(req.body)
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    });
})


router.get('/getall',(req,res) => {
    Model.find()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    });
})



router.get('/getbyid/:id', (req,res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    });
})


router.get('/getbyemail/:email',(req,res) => {
    Model.find({email: req.params.email})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    });
})


router.delete('/delete/:id',(req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    });
})


router.put('/update/:id',(req,res) => {
    Model.findByIdAndUpdate(req.params.id, res.body, {new:true})
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error: 'Internal Server Error'})
    });
})


module.exports = router;