
module.exports = function () {
  var self = this;
  return new Promise(function (resolve) {
    self.environment = process.env.NODE_ENV || 'development';
    resolve();
  });
};
