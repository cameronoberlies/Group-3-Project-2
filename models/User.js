const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
  {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

    person_name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    species_wanted: {
        type: DataTypes.STRING,
        allowNull: false
    }


    }
);

module.exports = User;