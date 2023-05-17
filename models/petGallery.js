const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class petGallery extends Model {}

petGallery.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

    pet_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pet_age: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    species: {
        type: DataTypes.STRING,
        allowNull: false
    },

    arrival_date: {
        type: DataTypes.DATE,
        allowNull: false
    },

    current_date: {
        type: DataTypes.DATE,
        allowNull: false
    }



  }

);

module.exports = petGallery;