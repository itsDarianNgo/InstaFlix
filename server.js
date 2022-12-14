require('dotenv').config({path: './config/.env'})
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')



// Routes
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')
const detailRoutes = require("./routes/details");
// this will change the route used

const path = require('path');
const API_KEY = process.env.API_KEY;



// Passport config
require('./config/passport')(passport)

connectDB()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
// Sessions
app.use(
    session({
      secret: 'keyboard cat',
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
  )

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

// Routes
app.use('/', mainRoutes)
app.use('/todos', todoRoutes)
app.use("/details", detailRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
