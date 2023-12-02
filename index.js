const express =require('express')
require('./models')


const app = express()

app.use(express.json())

app.get('/',(req,res)=>{
    res.send('Hello World')
})

//User.sync({force:true})
//Contact.sync({force:true})
//User.drop()

app.listen(3000,()=>{
    console.log('app is running on port 3000');
})

