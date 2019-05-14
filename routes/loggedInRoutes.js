const express = require('express');
const loggedInRoutes = express.Router();

loggedInRoutes.get('/protected', (req,res, next) => {
    try{
        res.json({
            user: req.user, 
            message: 'AUTHENTICATED!'});
    }
    catch (e) {
        consol.log(e.message);
    }
});




module.exports =  loggedInRoutes;