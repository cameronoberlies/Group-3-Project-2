const User = require('./User');
const Pet = require('./Pet');

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
User.hasMany(Pet, {
  foreignKey: 'user_id',
});

// The association can also be created from the Car side
Pet.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Pet };
