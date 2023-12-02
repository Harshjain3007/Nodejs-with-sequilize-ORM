const express =require('express')
require('./models')
var usercontroller = require('./controllers/userController')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

//User.sync({force:true})
//Contact.sync({force:true})
//User.drop()

app.get('/adduser',usercontroller.addUser)


app.listen(3000,()=>{
    console.log('app is running on port 3000');
})

