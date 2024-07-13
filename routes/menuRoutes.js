const express = require('express');
const router = express.Router();

const MenuItem = require('../models/MenuItem')

router.post('/', async (req,res) => {
    try{
     const data = req.body
     // create a new obejct of person
     const newMenu = new MenuItem(data)
     const response = await newMenu.save();
     console.log('menu saved ')
     res.status(200).json(response) ; 
    }catch(err){
     console.log(err);
     res.status(500).json({error: 'Internal server error'});
    } 

});

router.get('/', async (req,res) => {
        try{
            const response = await MenuItem.find();
            console.log('data fetched');
            res.status(200).json(response);
        }catch(err){
            console.log('internal server error !');
            res.status(500).json({error: 'internal server err'})
        }
})

router.get('/:tastetype', async (req,res)=>{
        try{
            const  tastetype = req.params.tastetype ; 
            const response = await MenuItem.find({taste:tastetype})
            console.log(response);
            res.status(200).json(response) ;
        }catch(err){
            console.log('invalid error')
            res.status(500).json({error: 'invalid error'})
        }
})  


module.exports = router ; 