const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Calendar extends Model{}

Calendar.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    start: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    end: {
        type: DataTypes.STRING,
        allowNull: false
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'Calendar'
}
);

module.exports =  Calendar;