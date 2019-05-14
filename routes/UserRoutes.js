const express = require('express');
const userRouter = express.Router();

const { AuthUser } = require('../models');

// represents localhost:PORT/pets/

//get all those users yeah
userRouter.get('/', async (req, res) => {
  try {
    const allUsers = await AuthUser.findAll();
    res.send(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});


// post new user
userRouter.post('/', async (req, res) => {
  try {
    const postedUser = await AuthUser.create(req.body);
    res.send(postedUser);
  } catch (e) {
    console.log(e.message);
  }
});

//find one user
userRouter.get('/:id', async (req, res) => {
  try {
    const leUser = await AuthUser.findByPk(req.params.id);
    res.send(leUser);
  } catch (e) {
    console.log(e.message);
  }
});

//update existing users
userRouter.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const grabbedUser = await AuthUser.findByPk(id);
    if (grabbedUser) await grabbedUser.update(req.body);
    res.json({
      grabbedUser
    });
  } catch(e) {
    res.status(304).json({
      message: e.message
    });
    }
  })
  

// delete particular user
userRouter.delete('/:id', async (req, res) => {
  try {
    const deleteIt = await AuthUser.findByPk(req.params.id);
    await deleteIt.destroy();
    res.send(`successfully deleted selection ${deleteIt}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { userRouter };