const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Pets extends Model {}

Pets.init(
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
        type: DataTypes.DECIMAL(10,2),
        allowNull: false
    },

    species: {
        type: DataTypes.STRING,
        allowNull: false
    },

    
      breed: {
        type: DataTypes.STRING,
        allowNull: true
      },
      
      gender: {
        type:DataTypes.STRING,
        allowNull: false
      },

    arrival_date: {
        type: DataTypes.DATE,
        allowNull: false
    },

    current_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
  },
    {sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'pets',
    }
  

);

module.exports = Pets;
