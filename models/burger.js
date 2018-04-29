var orm = require('../config/orm.js');


var burger = {

  selectAll: function(cb) {
    orm.selectAll('burgers', function(res) {
      cb(res);
    });
  },

  insert: function(cols, vals, cb) {
    orm.insert('burgers', cols, vals, function(res) {
      cb(res);
    });
  },

  update: function(objColVals, condition, cb) {
    orm.update('burgers', objColVals, condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;