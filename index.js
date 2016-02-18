
module.exports = function (done) {
  this.environment = process.env.NODE_ENV;
  process.nextTick(done);
};
