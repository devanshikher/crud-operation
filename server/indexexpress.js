const express=require("express");
const app=express();
const PORT=3000;

app.get("/",(req,res)=>{
    res.send("hello everyone");
})

app.listen(PORT,()=>{
    console.log("Server is running on http://localhost:3000/Devanshi")
    
})