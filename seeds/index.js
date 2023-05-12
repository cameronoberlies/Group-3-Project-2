const sequelize = require('../config/connection');
const { Pets } = require('../models');

const petsSeedData = require('./petGalleryData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const pets = await Pets.bulkCreate(petsSeedData, {
    individualHooks: true,
    returning: true,
  });
 


  process.exit(0);
};

seedDatabase();