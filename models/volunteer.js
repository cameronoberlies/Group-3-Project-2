const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Volunteer extends Model {}

Volunteer.init({
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'volunteer',    
    
});

module.exports = Volunteer;

