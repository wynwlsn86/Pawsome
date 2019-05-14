const express = require('express');
const petRouter = express.Router();

const { Pet } = require('../models');

// represents localhost:PORT/pets/

//get all those pets yeah
petRouter.get('/', async (req, res) => {
  try {
    const allPets = await Pet.findAll();
    res.send(allPets);
  } catch (e) {
    console.log(e.message);
  }
});


// post new pet
petRouter.post('/', async (req, res) => {
  try {
    const postedPet = await Pet.create(req.body);
    res.send(postedPet);
  } catch (e) {
    console.log(e.message);
  }
});

//find one pet
petRouter.get('/:id', async (req, res) => {
  try {
    const lePet = await Pet.findByPk(req.params.id);
    res.send(lePet);
  } catch (e) {
    console.log(e.message);
  }
});

//update existing pets
petRouter.put('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const selectedPet = await Pet.findByPk(id);
      if (selectedPet) await selectedPet.update(req.body);
      res.json('update success' + selectedBody);
    } catch(e) {
      res.json(console.log(e + 'oh no so sad man'))
    }
  })

petRouter.put('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const grabbedPet = await Pet.findByPk(id);
    if (grabbedPet) await grabbedPet.update(req.body);
    res.json({
      grabbedPet
    });
  } catch(e) {
    res.status(304).json({
      message: e.message
    });
    }
  })

// delete particular pet
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