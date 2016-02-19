
module.exports = function (done) {
  this.environment = process.env.NODE_ENV || 'development';
  process.nextTick(done);
};
