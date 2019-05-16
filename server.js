const passport = require('passport');
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const { petRouter } = require('./routes/petsRoutes');
const authRouter = require('./routes/authRoutes');
const { volRouter } = require('./routes/volunteersRoutes');
const loggedInRoutes = require('./routes/loggedInRoutes');

const { userRouter } = require('./routes/userRoutes');
const { adopterRouter} = require('./routes/adopterRoutes');



const { authorized } = require('./auth/auth');
const { userRouter } = require('./routes/UserRoutes');
const { awsRouter } = require('./routes/awsRoutes');

const PORT = process.env.PORT || 5000

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));
app.use(passport.initialize());

app.use('/pets', petRouter)
app.use('/auth', authRouter);
app.use('/adopters', adopterRouter)
app.use('/app', authorized, loggedInRoutes);
app.use('/volunteers', volRouter)
app.use('/users', userRouter)
app.use('/image', awsRouter)

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
