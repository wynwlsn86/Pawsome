const express= require('express');
const authRouter = express.Router();
const {passport, jwtSign } = require('../auth/auth');


authRouter.post('/login', async (req,res, next) => {
    passport.authenticate('login', async(err, user, info) => {
    try {
        if(!user) {
            const error = new Error('No username')
            return next(error);
        }
      if (err) {
        const error = new Error('Backend Error')
        return next(error);
      }


      req.login(user, { session : false }, async (error) => {
        if ( error ) return next(error)
        const { username, id } = user
        const payload = { username, id }
        const token = jwtSign(payload)
        return res.json({ user, token })
      })
    } catch(error) {
      return next(error)

    }
  })(req, res, next)
});

authRouter.post('/signup', async (req,res,next) => {
    passport.authenticate('signup', async (err, user, info) => {
        try{
            if (!user || err ) {
              let err = Error('Account not created');
              err.status = 400;
              return next(err);
            }
            console.log(user);
            return res.json({message: "Account created"})
        }
        catch (e) {
            return next(e);
        }
    })(req, res, next)
})

module.exports = authRouter;
