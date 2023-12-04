const { Sequelize,DataTypes,Model } = require('sequelize')
const env = require('../env')
const user = require('./user')


const sequelize = new Sequelize(env.db_name, env.db_username, env.db_password, {
    host: 'localhost',
    logging:true, //by default this is true but if we do false it will not show in terminal
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
   db.userContacts = require('./userContacts')(sequelize,DataTypes,db.user,db.contact)
   db.education = require('./education')(sequelize,DataTypes)

    // db.user.hasOne(db.contact,{foreignKey: 'user_id',as:'contactdetails'});
    // db.contact.belongsTo(db.user,);
    // db.user.hasMany(db.contact,{foreignKey: 'user_id',as:'contactdetails'});
    // db.contact.belongsTo(db.user,{foreignKey: 'user_id',as:'userdetails'});
    db.user.hasMany(db.contact,{foreignKey: 'UserId'});
    db.contact.belongsTo(db.user,{foreignKey: 'UserId'})


    db.contact.hasMany(db.education,{foreignKey: 'ContactId'});
    db.contact.belongsTo(db.user,{foreignKey: 'ContactId'})


      // db.user.belongsToMany(db.contact, { through: db.userContacts });
      // db.contact.belongsToMany(db.user,{ through: db.userContacts });

  db.sequelize.sync({ force:false})


  module.exports = db