// const { default: mongoose } = require('mongoose')
const mongoose = require('mongoose')

const mongoUrl = 'mongodb://localhost:27017/hotels'
// const mongoUrl = 'mongodb+srv://techsj04:SCiC817EmqB7Avri@cluster0.ikuddmo.mongodb.net/'

mongoose.connect(mongoUrl , {
    useNewUrlParser :true,
    useUnifiedTopology: true
})

// create object to make the connection 
const db = mongoose.connection ; 


//define event listener 
db.on('connected', () => {
    console.log('db connected') ;
});

db.on('error', (err) => {
    console.log('connection error ', err) ;
});

db.on('disconnected', () => {
    console.log('mongodb disconnected ') ;
});

//export db connection
module.exports = db;



