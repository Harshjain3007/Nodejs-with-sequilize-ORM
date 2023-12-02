const { Sequelize,DataTypes,Model } = require('sequelize')
const env = require('../env')


const sequelize = new Sequelize(env.db_name, env.db_username, env.db_password, {
    host: 'localhost',
    dialect:'mysql' /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  })

  const db ={}
  db.sequelize = sequelize
  db.sequelize = sequelize

  try {
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }


    db.contact=require('./contact')(sequelize,DataTypes,)
   db.user = require('./user')(sequelize,DataTypes,Model)
  db.sequelize.sync({ force: true });


  module.exports = db