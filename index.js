const express = require('express')
const mongoose = require('mongoose')
const keys = require('./config/keys')
const cookies = require('cookie-session');
const passport = require('passport');


require('./models/User')
require('./services/passport')

const app = express()

app.use(cookies({
  maxAge: 30 * 24 * 60 * 60 * 1000,
  keys: [keys.cookieKey]
}))

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, () => {console.log("Connected to MongoDB...");})

require("./routes/authRoutes")(app)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running...")
})
