const express = require('express');
const userRouter = express.Router();

const { AuthUser } = require('../models');

// represents localhost:PORT/pets/

//get all those pets yeah
userRouter.get('/', async (req, res) => {
  try {
    const allUsers = await AuthUser.findAll();
    res.send(allUsers);
  } catch (e) {
    console.log(e.message);
  }
});


// post new pet
userRouter.post('/', async (req, res) => {
  try {
    const posteduser = await AuthUser.create(req.body);
    res.send(postedUser);
  } catch (e) {
    console.log(e.message);
  }
});

//find one pet
userRouter.get('/:id', async (req, res) => {
  try {
    const leUser = await AuthUser.findByPk(req.params.id);
    res.send(leUser);
  } catch (e) {
    console.log(e.message);
  }
});

//update existing pets
userRouter.put('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const selectedUser = await user.findByPk(id);
      console.log('got',req.body)
      if (selectedUser) await selectedUser.update(req.body);
      res.json('update success');
    } catch(e) {
      res.json(console.log(e + 'oh no so sad man'))
    }
  })

// delete particular pet
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