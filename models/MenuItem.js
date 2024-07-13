const mongoose = require('mongoose')

//define person schema

const menuItemSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    price: {
        type: Number
    },
    taste: {
        type: String,
        enum: ['sweet','spice', 'sour'],
        required: true
    },
    is_drink: {
        type:Boolean,
        default: false
    },
    ingredients: {
        type: [String],
        default: []
    },
    num_sales: {
        type: Number,
        default: 0
    }

    
});

//create person model 
const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem ; 