const User = require('./User');
const Pets = require('./Pets');
const userFavorites = require('./userFavorites');


// User.hasMany(Pets, {
//   foreignKey: 'user_id',
// });


// Pets.belongsTo(User, {
//   foreignKey: 'user_id',
// });

User.belongsToMany(Pets, {
    through: userFavorites,
    
    foreignKey: "user_id"
});

Pets.belongsToMany(User, {
    through: userFavorites, 

    foreignKey: "pets_id"
});

module.exports = { User, Pets, userFavorites };
