const express = require('express')
const app = express()
const db = require('./db')
const MenuItem = require('./models/MenuItem')
const bodyParser = require('body-parser')
app.use(bodyParser.json());

 
// import router file 
const PersonRoutes = require('./routes/personRoutes')
const MenuItemRoutes = require('./routes/menuRoutes')

app.use('/person',PersonRoutes)
app.use('/menu',MenuItemRoutes)



app.listen(3000)