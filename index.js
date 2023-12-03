const express = require('express')

const cors =require('cors')



const app = express()

app.use(cors());


const users=['aksh','habib','badol','joy','ridoy','asif']

app.get("/",(req,res)=>{

  const fruit={
    product:"Banana",
    price:220
  }

  res.send(fruit);
})

app.get("/fruit/banana",(req,res)=>{

  res.send({fruit:"banana",quantity:1000,price:100});
})

app.get("/users/:id",(req,res)=>{
  const id=req.params.id;
  console.log(req.query.sort)
   const name=users[id]
   res.send({id,name})
})

app.listen(3000,()=> console.log("listening to port 3000"))