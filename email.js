const request = require('request');

module.exports = function(context, cb) {
  cb(null, `${context.body.to}`);
};
