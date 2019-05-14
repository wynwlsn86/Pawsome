const express = require('express');
const adopterRouter = express.Router();

const { Adopter } = require('../models');

// represents localhost:PORT/adopters/

//get all those adopters yeah
adopterRouter.get('/', async (req, res) => {
  try {
    const allAdopters = await Adopter.findAll();
    res.send(allAdopters);
  } catch (e) {
    console.log(e.message);
  }
});


// post new adopter
adopterRouter.post('/', async (req, res) => {
  try {
    const postedAdopter = await Adopter.create(req.body);
    res.send(postedAdopter);
  } catch (e) {
    console.log(e.message);
  }
});

//find one adopter
adopterRouter.get('/:id', async (req, res) => {
  try {
    const leAdopter = await Adopter.findByPk(req.params.id);
    res.send(leAdopter);
  } catch (e) {
    console.log(e.message);
  }
});

//update existing adopters
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

// delete particular adopter
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