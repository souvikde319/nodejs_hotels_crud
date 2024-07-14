const express = require('express')
const app = express()
const db = require('./db')
require('dotenv').config();
const passport = require('./auth');
const MenuItem = require('./models/MenuItem')
const bodyParser = require('body-parser')
// import router file 
const PersonRoutes = require('./routes/personRoutes')
const MenuItemRoutes = require('./routes/menuRoutes')

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000 ;

const logRequest = (req, res, next) => {
    console.log(`${new Date().toLocaleString()} request made to: ${req.originalUrl}`);
    next();

}

app.use(logRequest)



// passport initialize
app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', {session: false})

app.get('/', localAuthMiddleware , (req,res) => {
    res.send('welcome to hotel')
})



app.use('/person',localAuthMiddleware, PersonRoutes)
app.use('/menu', localAuthMiddleware , MenuItemRoutes)



app.listen(PORT)