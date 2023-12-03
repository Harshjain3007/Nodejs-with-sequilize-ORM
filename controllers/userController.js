var db = require("../models");
const user = require("../models/user");
const {Sequelize,Op,QueryTypes} = require('sequelize')
var User = db.user;



var addUser = async (req, res) => {
  // const jane = User.build({ firstName:"Jane",lastName:"Kumar" });
  const jane = await User.create({ firstName: "Rahul", lastName: "Singh" });
  console.log(jane instanceof User); // true
  console.log(jane.firstName); //
  jane.set({
    firstName: "Rohit",
    lastName: "Sharma",
  });
  jane.update({
    firstName: "Arjun",
    lastName: "Rananvat",
  });
  //await jane.save();
  await jane.destroy();
  console.log("Jane was saved to the database!");
  console.log(jane.toJSON());
  res.status(200).json(jane.toJSON());
};

var getUsers = async (req, res) => {
  const data = await User.findAll({});
  res.status(200).json({ data: data });
};

var getUserbyId = async (req, res) => {
  const data = await User.findOne({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};

var postUsers = async (req, res) => {
  let postdata = req.body;
  if (postdata.length > 1) {
    var data = await User.bulkCreate(postdata);
  } else {
    var data = await User.create(postdata);
  }
  // const data =await db.user.create(postdata);
  res.status(201).json({ data: data });
};

var deleteusers = async (req, res) => {
  const data = await User.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ message: "data deleted" });
};

var updateusers = async (req, res) => {
  let updateddata = req.body;
  const data = await User.update(updateddata, {
    where: {
      id: req.params.id,
    },
  });
  res.status(200).json({ data: data });
};

// var  queryUser = async (req,res)=>{
//     const data = await User.create({
//         firstName: 'Ajay',
//         lastName: "Gupta"
//       }, { fields: ['firstName'] });

//     res.status(200).json({data:data})
// }

//var  queryUser = async (req,res)=>{
//     const data = await User.findAll({
//         attributes:["firstName","LastName"]

//       });

//     res.status(200).json({data:data})
// }

var queryUser = async (req, res) => {
//   const data = await User.findAll({
//     //attributes: ['id',['firstName','first_Name'],
//     attributes: {include:['id']}
//     //[Sequelize.fn('COUNT',Sequelize.col('id')),'count']
   
//   });
// const data = User.findAll({
//     where: {
//       firstName: {
//         [Op.eq]: "Aniket"
//       }
//     }
//   });
//   const data = User.findAll({
//    group:"lastName"
//   });

  const data = User.findAll({
    limit:3
   });
  res.status(200).json({ data: data });
};


var findersUser = async(req,res)=>{
  // const data = await User.findOne({
  //   where:{
  //     lastName:"Singh"
  //   }
  //   })
   // const data = await User.findByPk(29)
  //  const [user, created] = await User.findOrCreate({
  //   where: { firstName: 'Manish' },
  //   defaults: {
  //   "lastName": "Singh"
  //   },
    const {count,rows} = await User.findAndCountAll({
      where: { lastName: 'Singh' },
  })
    res.status(200).json({ data:rows,created:count});
}

var getSetVirtualUser =async function(req,res){
 const data = await User.findAll({
    where: { lastName: 'Singh' },
})
// const data = await User.create({
//  firstName:"Naresh",
//  lastName:"Kumar"
// })
  res.status(200).json({ data:data});
}


var validateUser = async(req,res)=>{
  var data ={}
  var messages = {}

   try{
    data = await User.create({
      firstName:"1ravi",
      lastName:"Kumar"
       })
      }catch(e){
       // console.log(e.errors)
         let message
        e.errors.forEach(error=>{
          switch(error.validatorKey){
             case 'isAlpha':
              message=error.message
              break;
              case 'isLowercase':
              message="Only lowercase are allowed"
              break;
              case 'len':
                message="min 2 max 10 characters are allowed"
                break;
}
            messages[error.path]  = message
        })
      }
     res.status(200).json({ data:data,messages:messages})
    
}


var rawqueriesUser = async(req,res)=>{
  
  // const users = await db.sequelize.query("SELECT * FROM `users`", { type: QueryTypes.SELECT,
  //    model: User,
  //    mapToModel: true ,
  //    ///plain:true   plain true will return only one record
  //  });
 // const users=  await db.sequelize.query(
  //   'SELECT * FROM users WHERE firstName = ?',
  //   {
  //     replacements: ['Rajeev'],
  //     type: QueryTypes.SELECT
  //   }
  // );
  // const users=  await db.sequelize.query(
  //  'SELECT * FROM users WHERE id = :id',
  //   {
  //     replacements: {id:'1'},
  //     type: QueryTypes.SELECT
  //   }
  // );
  //   const users=  await db.sequelize.query(
  //  'SELECT * FROM users WHERE id IN(:id)',
  //   {
  //     replacements: {id:[1,5]},
  //     type: QueryTypes.SELECT
  //   }
  // );

  // const users=  await db.sequelize.query(
  //   'SELECT * FROM users WHERE firstName LIKE :search_name',
  //    {
  //      replacements: {search_name:"Sanjeev"},
  //      type: QueryTypes.SELECT
  //    }
  //  );
   const users=  await db.sequelize.query(
    'SELECT * FROM users WHERE id=$id',
     {
       bind: {id:"4"},
       type: QueryTypes.SELECT
     }
   );
  res.status(200).json({ data:users})
}


module.exports = {
  addUser,
  getUsers,
  getUserbyId,
  postUsers,
  deleteusers,
  updateusers,
  queryUser,
  findersUser,
  getSetVirtualUser,
  validateUser,
  rawqueriesUser
};
