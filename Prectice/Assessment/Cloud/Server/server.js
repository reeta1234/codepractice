const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = require('./route/route')
const cors = require('cors')
var passport = require("passport")
var cookieParser = require('cookie-parser');
var GitHubStrategy = require("passport-github").Strategy
const timestamp = new Date().getTime(); 
const exp = timestamp + (60 * 60 * 1000)

const GITHUB_CLIENT_ID = "43b198c4ec38816fb153" 
const GITHUB_CLIENT_SECRET = "87756410c2e4e6b2e8005ea51eb363491911b3c1" 
const GITHUB_CALLBACK_URL = "http://localhost:3001/auth/github/callback" 
const OROGIN_URL = "http://localhost:3000"

const corsOptions={
  origin:OROGIN_URL,
  creadetainl:false
}

passport.serializeUser(function(user, done) {
  done(null, user)
})

passport.deserializeUser(function(obj, done) {
  done(null, obj)
})

passport.use(
  new GitHubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: GITHUB_CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function () {
        return done(null, {accessToken,profile});
      });
    }
  )
)
app.use(passport.initialize())
app.use(passport.session())
app.use(cookieParser());

app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get("",function(req,res){
    res.send("Hello")
})

app.get("/auth/github",
  passport.authenticate("github", { scope: ["repo:status"] }), 
  function(req, res) { }
)

app.get("/auth/github/callback",
  passport.authenticate("github", { failureRedirect: "/login" }),
  function(req, res) {
    res.cookie('accessToken', req.user.accessToken,{maxAge:exp}); 
    res.redirect("http://localhost:3000")
  }
)

app.use("/api",router)

const PORT = process.env.PORT || 3001
app.listen(PORT,function(){
    console.log(`Server Start On ${PORT}`)
})