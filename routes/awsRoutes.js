const express = require('express');
const awsRouter = express.Router();
const upload = require('../client/src/services/aws');

const singleUpload = upload.single('image')

awsRouter.post('/image-upload', (req, res) => {
  singleUpload(req, res, (err, some) => {
    if (err) {
      return res.status(422).send({errors: [{title: 'Image Upload Error', detail: err.message}] });
    }
    return res.json({'imageUrl': req.file.location});
  });
})

module.exports = { awsRouter };
