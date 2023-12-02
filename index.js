const express =require('express')
const User =require('./models/user')

const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

User.sync({force:true})
//User.drop()

app.listen(3000,()=>{
    console.log('app is running on port 3000');
})

