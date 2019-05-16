const multer = require('multer');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

aws.config.update({
    secretAccessKey: 'pw8+v8q9m3a58BH8wJUtXGpcFOQRa/lnQDmTmzp3',
    accessKeyId: 'AKIAJFCX5DPDK3Z4BAYA',
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
