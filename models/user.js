const { DataTypes } = require('sequelize');
const sequelize = require('./index')


const User = sequelize.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    // allowNull defaults to true
    defaultValue:"Kumar"
  }
}, {
  // Other model options go here

  tableName: 'Users',
 // timestamps:false,
  createdAt:false,
  updatedAt:'updated_at'
});

console.log(User === sequelize.models.User); // true

module.exports = User