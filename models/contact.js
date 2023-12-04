const { INTEGER } = require("sequelize");

module.exports =(sequelize,DataTypes)=>{

const Contact = sequelize.define('Contact', {
  // Model attributes are defined here
  permanent_address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  current_address: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  UserId:DataTypes.INTEGER
    
}, {
  // Other model options go here
});
return Contact
}
