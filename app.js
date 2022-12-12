const dbConnect = require("./db/dbConnect");

dbConnect();


const User = require("./db/userModel");

const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
  });

app.use(express.json());
const PORT = 3000;

app.get("/",(req,res)=>{
    res.send("Hello server")

})

app.post("/register",(req,res)=>{
    

    const user=new User({
        name : req.body.name,
        age : req.body.age,
        gender : req.body.gender,
        dateOfJoining : req.body.dateOfJoining,
        currentBatch : req.body.currentBatch
    });
    user.save()
    .then((result)=>{
       return res.status(201).send({
            message : "User saved successfully",
            result
        })
    })
    .catch((error)=>{
        return res.status(500).send({
            message : "Error in creating user",
            error
        })
    })
 })

app.listen(PORT, (error) =>{
if(!error)
console.log("Server is Successfully Running,and App is listening on port"+ PORT)
else
console.log("Error occurred, server can't start", error);
}
);