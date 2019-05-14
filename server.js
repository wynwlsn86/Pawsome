const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const { petRouter } = require('./routes/petsRoutes');
<<<<<<< HEAD
const authRouter = require('./routes/authRoutes');
const loggedInRoutes = require('./routes/loggedInRoutes');
const passport = require('passport');
const { authorized } = require('./auth/auth');
=======
const { volRouter } = require('./routes/volunteersRoutes');
const { userRouter } = require('./routes/userRoutes');

//const passport = require('passport') tuesday
>>>>>>> fb9ed1baa9c358c7966532e539b3bb350e0f0cc8


const PORT = process.env.PORT || 5000

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());

app.use('/pets', petRouter)
<<<<<<< HEAD
app.use('/auth', authRouter);
app.use('/app', authorized, loggedInRoutes);
=======
app.use('/volunteers', volRouter)
app.use('/users', userRouter)
>>>>>>> fb9ed1baa9c358c7966532e539b3bb350e0f0cc8

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
