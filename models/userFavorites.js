const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
 
class userFavorites extends Model{}

userFavorites.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },

      pets_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'Pets',
          key: 'id',
        },
      },

      user_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'User',
          key: 'id',
        },
      },
    
      
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'userFavorites'
}
);

module.exports = userFavorites;