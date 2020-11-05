const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./route/route')
const cors = require('cors')
var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;

passport.use(new GitHubStrategy({
    clientID: "43b198c4ec38816fb153",
    clientSecret: "88b8b03154a2e78680f9cf7919b368dc0347a3ee",
    callbackURL: "http://localhost:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOne({ githubId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

const corsOptions={
    origin:'http://localhost:3000',
    creadetainl:false
}


const verifyToken = function(req,res,next){
    res.setHeader('X-Frame-Options',"Heelllllxxx-yyy-zzz")
    res.setHeader('X-Auth-Token',"xxx-yyy-zzz")
   // console.log(req.headers)
    if (req.headers['content-type'] !== 'application/json') {
        res.status(400).send('Server requires application/json')
    } else {
      next()
    }
}

app.get('/auth/github/callback', 
  passport.authenticate('github', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    console.log('fsdfdsf')
    res.redirect('/');
  });

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("",function(req,res){
    res.send("get from ")
})
app.use("/api",verifyToken,router)
const PORT = process.env.PORT || 3001
app.listen(PORT,function(){
    console.log(`Server Start On ${PORT}`)
})