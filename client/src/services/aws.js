const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

aws.config.update({
    secretAccessKey: 'T3Mbw0TBmO7Yqy4oQXhICPb16AqlrIbale06bgsr',
    accessKeyId: 'AKIAI7GIABYAOS2DR5XQ',
    region: 'us-east-2'
});

const s3 = new aws.S3();


const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'pawesomepetrescue',
    acl: 'public-read',
    metadata: function (req, file, cb) {
        cb(null, {fieldName: file.fieldname});
    },
    key: function (req, file, cb) {
    cb(null, Date.now().toString())
      }
    })
});

module.exports = upload;
