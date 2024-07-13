const express = require('express');
const router = express.Router();
const Person = require('../models/Person') ;

//post person data
router.post('/', async (req,res) => {
    try{
     const data = req.body
     // create a new obejct of person
     const newPerson = new Person(data)
     const response = await newPerson.save();
     console.log('data saved ')
     res.status(200).json(response) ; 

    }catch(err){
     console.log(err);
     res.status(500).json({error: 'Internal server error'});
    } 

});



// Get person data 
router.get('/', async (req,res) => {
    try{
      const response = await Person.find();
      console.log('data fetched')
      res.status(200).json(response)
    }catch(err){
      console.log(err);
      res.status(500).json({error: 'Internal server error !'}) ; 
    }
  });
  
  
  
  // parameterized work type 
  
  router.get('/:workType', async (req,res) => {
    try{
      const workType = req.params.workType;  
      if(workType == "manager" || workType =="chef" || workType == "waiter") {
        const response = await Person.find({work:workType})
        console.log('response fetched')
        res.status(200).json(response);
      }else{
        res.status(500).json({error: 'invalid work type'})
      }
  
    }catch(err) {
        console.log(err);
      res.status(500).json({error: 'Internal server error !'}) ; 
    }
  })
  

  // update person data 
router.put('/:personId', async (req,res) => {
    try {
        const personId = req.params.personId;
        const updatePersonData = req.body;
        const response = await Person.findByIdAndUpdate(personId, updatePersonData, {
            new: true,
            runValidators: true
        })

        if(!response) {
            return res.status(404).json({error: 'perons not found!'})
        }

        console.log('update data ');
        res.status(200).json(response) ; 
    }catch(err) {
        console.log(err);
        res.status(500).json({error: 'Internal server error !'}) ; 
    }
    

})


// delete person data 
router.delete('/:personId' , async (req,res) => {

            try{
                const personId = req.params.personId
                const deletePerson = await Person.findByIdAndDelete(personId)
                res.status(200).json(deletePerson)
            }catch(err){
                console.log('errpr');
                res.status(500).json({error: 'invalid error !'})
            }

})







  module.exports = router ; 