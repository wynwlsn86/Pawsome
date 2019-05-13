const express = require('express');
const petRouter = express.Router();

const { Pet } = require('../models');

// represents localhost:PORT/pets/


petRouter.get('/', async (req, res) => {
  try {
    const allPets = await Pet.findAll();
    res.send(allPets);
  } catch (e) {
    console.log(e.message);
  }
});


// represents localhost:PORT/posts/
petRouter.post('/', async (req, res) => {
  try {
    const postedPet = await Pet.create(req.body);
    res.send(postedPet);
  } catch (e) {
    console.log(e.message);
  }
});

petRouter.get('/:id', async (req, res) => {
  try {
    const lePet = await PPet.findByPk(req.params.id);
    res.send(lePet);
  } catch (e) {
    console.log(e.message);
  }
});

// represents localhost:PORT/posts/:id
petRouter.delete('/:id', async (req, res) => {
  try {
    const deleteIt = await Pet.findByPk(req.params.id);
    await deleteIt.destroy();
    res.send(`successfully deleted selection ${deleteIt}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { petRouter };