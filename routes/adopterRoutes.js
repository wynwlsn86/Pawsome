const express = require('express');
const adopterRouter = express.Router();

const { Adopter } = require('../models');

// represents localhost:PORT/pets/

//get all those pets yeah
adopterRouter.get('/', async (req, res) => {
  try {
    const allAdopters = await Adopter.findAll();
    res.send(allAdopters);
  } catch (e) {
    console.log(e.message);
  }
});


// post new pet
adopterRouter.post('/', async (req, res) => {
  try {
    const postedAdopter = await Adopter.create(req.body);
    res.send(postedAdopter);
  } catch (e) {
    console.log(e.message);
  }
});

//find one pet
adopterRouter.get('/:id', async (req, res) => {
  try {
    const leAdopter = await Adopter.findByPk(req.params.id);
    res.send(leAdopter);
  } catch (e) {
    console.log(e.message);
  }
});

//update existing pets
adopterRouter.put('/:id', async (req, res) => {
    try {
      const id = req.params.id;
      const selectedAdopter = await Adopter.findByPk(id);
      console.log('got',req.body)
      if (selectedAdopter) await selectedAdopter.update(req.body);
      res.json('update success');
    } catch(e) {
      res.json(console.log(e + 'oh no so sad man'))
    }
  })

// delete particular pet
adopterRouter.delete('/:id', async (req, res) => {
  try {
    const deleteIt = await Adopter.findByPk(req.params.id);
    await deleteIt.destroy();
    res.send(`successfully deleted selection ${deleteIt}`);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = { adopterRouter };