const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy ; 
const Person = require('./models/Person')

// username and password use
passport.use(new LocalStrategy(async (USERNAME, password, done) => {
    // authentication logic here 
    try{
        console.log('recvd credetials');
        const user = await  Person.findOne({username: USERNAME})
        if(!user) 
            return done(null, false, { message: 'Username not found!'})
        const isPasswordMatch = user.password === password ? true : false ; 
        if(isPasswordMatch){
            return done(null, user)
        }else{
            return done(null, false,  { message: 'Username not found!'})
        }
    }catch(err){
        console.log('Invalid error!')
        return done(err)
    }
}))

module.exports = passport ;