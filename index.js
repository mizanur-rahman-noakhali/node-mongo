const express = require('express')

const cors =require('cors')

const  bodyParser = require('body-parser')



const app = express()

app.use(cors());

app.use(bodyParser.json())

const users=['aksh','habib','badol','joy','ridoy','asif']

app.get("/",(req,res)=>{

  const fruit={
    product:"Banana",
    price:220
  }

  res.send(fruit);
})


app.get("/users/:id",(req,res)=>{
  const id=req.params.id;
 
   const name=users[id]
   res.send({id,name})
})


//post
app.post('/addUser',(req,res)=>{
 // console.log('data recieved',req.body);

 // save to data base
 const user =req.body;
   user.id=78;
   res.send(user);
})


app.listen(3000,()=> console.log("listening to port 3000"))