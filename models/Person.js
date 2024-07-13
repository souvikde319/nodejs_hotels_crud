const mongoose = require('mongoose')

//define person schema

const personSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    age: {
        type: Number
    },
    work: {
        type: String,
        enum: ['manager','chef', 'waiter'],
        required: true
    },
    mobile: {
        type:String
    },
    email: {
        type:String,
        required: true,
        unique: true
    },
    address: {
        type:String
    },
    salary: {
        type: Number
    }
 
});

//create person model 
const Person = mongoose.model('Person', personSchema);
module.exports = Person ; 