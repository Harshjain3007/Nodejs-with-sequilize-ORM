var db = require('../models')
var User = db.user


var addUser = async (req,res)=>{
   // const jane = User.build({ firstName:"Jane",lastName:"Kumar" });
   const jane = await User.create({ firstName: "Rahul",lastName:"Singh" });
console.log(jane instanceof User); // true
console.log(jane.firstName); //
jane.set({
    firstName: "Rohit",
    lastName:"Sharma"
  });
  jane.update({
    firstName: "Arjun",
    lastName:"Rananvat"
  });
//await jane.save();
await jane.destroy()
console.log('Jane was saved to the database!');
console.log(jane.toJSON());
res.status(200).json(jane.toJSON())

}


module.exports = {
    addUser
}