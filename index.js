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

app.get('/getusers',usercontroller.getUsers)

app.get('/getusers/:id',usercontroller.getUserbyId)

app.post('/createusers',usercontroller.postUsers)

app.delete('/deleteusers/:id',usercontroller.deleteusers)

app.patch('/updateusers/:id',usercontroller.updateusers)

app.get('/query',usercontroller.queryUser)

app.get('/finders',usercontroller.findersUser)

app.get('/get-set-virtual',usercontroller.getSetVirtualUser)

app.get('/validate',usercontroller.validateUser)

app.get('/raw-queries',usercontroller.rawqueriesUser)

app.listen(3000,()=>{
    console.log('app is running on port 3000');
})

