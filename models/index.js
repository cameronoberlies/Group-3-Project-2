const User = require('./User');
const Pets = require('./Pets');


// User.hasMany(Pets, {
//   foreignKey: 'user_id',
// });


// Pets.belongsTo(User, {
//   foreignKey: 'user_id',
// });

module.exports = { User, Pets };
