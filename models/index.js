const User = require('./User');
const Pets = require('./Pets');

// Define a Driver as having many Cars, thus creating a foreign key in the `car` table
User.hasMany(Pets, {
  foreignKey: 'user_id',
});

// The association can also be created from the Car side
Pets.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Pets };
