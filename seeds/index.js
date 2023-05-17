const sequelize = require('../config/connection');
const { Pets, User } = require('../models');

const petsSeedData = require('./petGalleryData.json');
const userSeedData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const pets = await Pets.bulkCreate(petsSeedData, {
    individualHooks: true,
   returning: true,
  });
  
  const user = await User.bulkCreate(userSeedData, {
    individualHooks: true,
    returning: true
  });
 


  process.exit(0);
};

seedDatabase();