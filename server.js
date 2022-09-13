const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const todoRoutes = require('./routes/todos')
const path = require('path');
const API_KEY = process.env.API_KEY;

require('dotenv').config({path: './config/.env'})

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
  
// Test
app.get("/", function (req, res) {
  var movies = [
    {
      title: 'Trending',
      url: `/trending/all/week?api_key=${process.env.API_KEY}&language=en-US`
    },
    {
      title: 'Dumbledore',
      url: "Headmaster"
    },
    {
      title: 'Snape',
      url: "Professor"
    },
    {
      title: 'Hermione',
      url: "Student"
    }
     ];
  const subheading = "I though we should involve some magic";

  res.render("index", {
    movies: movies,
    subheading: subheading
  });
});

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())
  
app.use('/', mainRoutes)
app.use('/todos', todoRoutes)
 
app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})    
