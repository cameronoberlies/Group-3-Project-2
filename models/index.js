const User = require('./User');
const Pets = require('./Pets');
const Favorites = require('./userFavorites');


// User.hasMany(Pets, {
//   foreignKey: 'user_id',
// });


// Pets.belongsTo(User, {
//   foreignKey: 'user_id',
// });

User.belongsToMany(Pets, {
    through: "userFavorites",
    as: "Pets",
    foreignKey: "user_id"
});

Pets.belongsToMany(User, {
    through: "userFavorites", 
    as: "User",
    foreignKey: "pets_id"
});

module.exports = { User, Pets, Favorites };
