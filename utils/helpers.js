// functuon ifEquals  helps us to compare if two things are eqaul or not ... we can use this function in our views
module.exports = {
    ifEquals:function(arg1, arg2, options) {
      return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    }
  }