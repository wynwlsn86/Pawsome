const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const { petRouter } = require('./routes/petsRoutes');
//const passport = require('passport') tuesday


const PORT = process.env.PORT || 5000

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.use('/pets', petRouter)

//this is a prepending route. aka:  /app/protect and /auth/login etc
//app.use('/auth', (auth routes here preferably held in seperate file structure *router*)

app.get('/', async (req, res) => {
    try {
      res.send('los pawesomes')
    } catch (e) {
      res.send(e)
    }
  })
  
  app.listen(PORT, () => console.log(`running on port ${PORT}`))
